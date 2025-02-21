import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
// import { sendPurchaseReceipt } from '@/emails';
import Order from '@/lib/db/models/order.model';

// Check if environment variables are available
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;

let stripe: Stripe | null = null;

if (STRIPE_SECRET_KEY) {
  stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: '2025-01-27.acacia' });
}

export async function POST(req: NextRequest) {
  if (!stripe || !STRIPE_WEBHOOK_SECRET) {
    console.warn('Stripe is not initialized. Skipping webhook handling.');
    return new NextResponse('Stripe is not configured', { status: 500 });
  }

  try {
    // Read request body
    const rawBody = await req.text();
    const signature = req.headers.get('stripe-signature');

    if (!signature) {
      return new NextResponse('Missing Stripe signature', { status: 400 });
    }

    // Verify event
    const event = stripe.webhooks.constructEvent(rawBody, signature, STRIPE_WEBHOOK_SECRET);

    if (event.type === 'charge.succeeded') {
      const charge = event.data.object;
      const orderId = charge.metadata.orderId;
      const email = charge.billing_details.email;
      const pricePaidInCents = charge.amount;

      const order = await Order.findById(orderId).populate('user', 'email');
      if (!order) {
        return new NextResponse('Order not found', { status: 400 });
      }

      order.isPaid = true;
      order.paidAt = new Date();
      order.paymentResult = {
        id: event.id,
        status: 'COMPLETED',
        email_address: email!,
        pricePaid: (pricePaidInCents / 100).toFixed(2),
      };

      await order.save();

      try {
        await sendPurchaseReceipt({ order });
      } catch (err) {
        console.error('Failed to send email', err);
      }

      return NextResponse.json({ message: 'Order payment updated successfully' });
    }

    return new NextResponse();
  } catch (err) {
    console.error('Webhook error:', err);
    return new NextResponse('Webhook handling failed', { status: 500 });
  }
}
