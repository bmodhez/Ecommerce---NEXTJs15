import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import Order from '@/lib/db/models/order.model';

// Ensure environment variables are set
const RAZORPAY_KEY_ID = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!;
const RAZORPAY_SECRET = process.env.RAZORPAY_SECRET!;
const RAZORPAY_WEBHOOK_SECRET = process.env.RAZORPAY_WEBHOOK_SECRET!;

// Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: RAZORPAY_KEY_ID,
  key_secret: RAZORPAY_SECRET,
});

export async function POST(req: NextRequest) {
  if (!razorpay || !RAZORPAY_WEBHOOK_SECRET) {
    console.warn('Razorpay is not initialized. Skipping webhook handling.');
    return new NextResponse('Razorpay is not configured', { status: 500 });
  }

  try {
    const rawBody = await req.text();
    const signature = req.headers.get('x-razorpay-signature');

    if (!signature) {
      return new NextResponse('Missing Razorpay signature', { status: 400 });
    }

    // Verify webhook signature
    const expectedSignature = crypto
      .createHmac('sha256', RAZORPAY_WEBHOOK_SECRET)
      .update(rawBody)
      .digest('hex');

    if (signature !== expectedSignature) {
      return new NextResponse('Invalid signature', { status: 400 });
    }

    const event = JSON.parse(rawBody);

    if (event.event === 'payment.captured') {
      const payment = event.payload.payment.entity;
      console.log('Payment Captured:', payment);

      // Extract orderId from payment metadata
      const orderId = payment.notes?.orderId; // Assuming orderId is stored in notes

      if (!orderId) {
        return new NextResponse('Order ID not found in payment', { status: 400 });
      }

      // Find the order in DB
      const order = await Order.findById(orderId);
      if (!order) {
        return new NextResponse('Order not found', { status: 400 });
      }

      // Update order status in the database
      order.isPaid = true;
      order.paidAt = new Date();
      order.paymentResult = {
        id: payment.id,
        status: 'COMPLETED',
        email_address: payment.email,
        pricePaid: (payment.amount / 100).toFixed(2),
      };

      await order.save();

      return NextResponse.json({ message: 'Order payment updated successfully' });
    }

    return new NextResponse('Webhook received', { status: 200 });
  } catch (err) {
    console.error('Webhook error:', err);
    return new NextResponse('Webhook handling failed', { status: 500 });
  }
}
