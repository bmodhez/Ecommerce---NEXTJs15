import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

// Ensure environment variables are set
const RAZORPAY_KEY_ID = process.env.rzp_test_sDxRJZYUxz2MLY!;
const RAZORPAY_SECRET = process.env.WJ3oqiNOl2K0wKJGhWhNSm0O!;
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
    const crypto = require('crypto');
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

      // Process the payment (e.g., update order in DB)
    }

    return new NextResponse('Webhook received', { status: 200 });
  } catch (err) {
    console.error('Webhook error:', err);
    return new NextResponse('Webhook handling failed', { status: 500 });
  }
}
