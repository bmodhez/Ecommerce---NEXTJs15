import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ProductPrice from '@/components/shared/product/product-price';
import useSettingStore from '@/hooks/use-setting-store';
import { loadScript } from '@/lib/load-script';

export default function RazorpayForm({
  priceInCents,
  orderId,
}: {
  priceInCents: number;
  orderId: string;
}) {
  const {
    setting: { site },
  } = useSettingStore();

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  async function handlePayment() {
    setIsLoading(true);

    // Load Razorpay script
    const razorpayLoaded = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
    if (!razorpayLoaded) {
      setErrorMessage('Failed to load Razorpay. Please try again.');
      setIsLoading(false);
      return;
    }

    // Fetch order from backend
    try {
      const res = await fetch('/api/create-razorpay-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: priceInCents }),
      });
      const data = await res.json();

      if (!data.id) throw new Error('Failed to create order');

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: priceInCents,
        currency: 'INR',
        name: site.name,
        description: 'Order Payment',
        order_id: data.id,
        handler: async function (response: any) {
          const verifyRes = await fetch('/api/verify-razorpay-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              order_id: data.id,
              payment_id: response.razorpay_payment_id,
              signature: response.razorpay_signature,
            }),
          });
          const verifyData = await verifyRes.json();

          if (verifyData.success) {
            window.location.href = `${site.url}/checkout/${orderId}/razorpay-payment-success`;
          } else {
            setErrorMessage('Payment verification failed.');
          }
        },
        prefill: {
          name: 'Your Customer Name',
          email: 'customer@example.com',
          contact: '9999999999',
        },
        theme: { color: '#3399cc' },
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();
    } catch (error: any) {
      setErrorMessage(error.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className='space-y-4'>
      <div className='text-xl'>Razorpay Checkout</div>
      {errorMessage && <div className='text-destructive'>{errorMessage}</div>}
      <Button className='w-full' size='lg' disabled={isLoading} onClick={handlePayment}>
        {isLoading ? (
          'Processing...'
        ) : (
          <div>
            Pay - <ProductPrice price={priceInCents / 100} plain />
          </div>
        )}
      </Button>
    </div>
  );
}
