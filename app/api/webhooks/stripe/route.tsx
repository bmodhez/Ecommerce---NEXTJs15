import { NextRequest, NextResponse } from 'next/server';
import Order from '@/lib/db/models/order.model';
import { sendPurchaseReceipt } from '@/emails';

export async function POST(req) {
  try {
    // Simulate a received event
    const event = await req.json();

    console.log("🔹 Dummy Stripe Webhook Received:", event);

    if (event.type === 'charge.succeeded') {
      const charge = event.data.object;
      const orderId = charge.metadata?.orderId || "dummy_order_id";
      const email = charge.billing_details?.email || "test@example.com";
      const pricePaidInCents = charge.amount || 1000; // Default: $10.00

      // Simulate fetching the order
      const order = await Order.findById(orderId).populate('user', 'email');

      if (!order) {
        console.log("❌ Order not found!");
        return new NextResponse("Bad Request", { status: 400 });
      }

      order.isPaid = true;
      order.paidAt = new Date();
      order.paymentResult = {
        id: event.id || "dummy_event_id",
        status: 'COMPLETED',
        email_address: email,
        pricePaid: (pricePaidInCents / 100).toFixed(2),
      };

      await order.save();

      try {
        await sendPurchaseReceipt({ order });
        console.log("📩 Dummy email sent successfully!");
      } catch (err) {
        console.log("❌ Email sending error:", err);
      }

      return NextResponse.json({
        message: 'updateOrderToPaid was successful (Dummy API)',
      });
    }

    return new NextResponse();
  } catch (error) {
    console.error("❌ Dummy Webhook Error:", error);
    return new NextResponse("Invalid request", { status: 400 });
  }
}
