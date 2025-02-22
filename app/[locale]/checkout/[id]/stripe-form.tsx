import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ProductPrice from '@/components/shared/product/product-price';

export default function RazorpayForm({ priceInCents, orderId }: { priceInCents: number; orderId: string }) {
  const [isLoading, setIsLoading] = useState(false);

  const loadRazorpay = (): Promise<typeof window.Razorpay | null> => {
        return new Promise((resolve) => {
          if ((window as any).Razorpay) {
            resolve((window as any).Razorpay);
            return;
          }
      
          const script = document.createElement('script');
          script.src = 'https://checkout.razorpay.com/v1/checkout.js';
          script.async = true;
          script.onload = () => resolve((window as any).Razorpay);
          script.onerror = () => resolve(null);
      
          document.body.appendChild(script);
        });
      };
      
      

  const handlePayment = async () => {
    setIsLoading(true);
    
    const razorpay = await loadRazorpay();
    if (!razorpay) {
      alert('Failed to load Razorpay SDK. Please try again.');
      setIsLoading(false);
      return;
    }
    
    try {
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: priceInCents, orderId })
      });
      const order = await response.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: 'INR',
        name: 'Your Store Name',
        description: 'Purchase Description',
        order_id: order.id,
        handler: async function (response: any) {
          alert('Payment Successful!');
          console.log(response);
          // Handle success response, e.g., updating DB
        },
        prefill: { email: 'customer@example.com' },
        theme: { color: '#3399cc' }
      };

      const rzp = new razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Payment Error:', error);
    }
    setIsLoading(false);
  };

  return (
    <div className='space-y-4'>
      <div className='text-xl'>Razorpay Checkout</div>
      <Button className='w-full' size='lg' onClick={handlePayment} disabled={isLoading}>
        {isLoading ? 'Processing...' : <div>Pay - <ProductPrice price={priceInCents / 100} plain /></div>}
      </Button>
    </div>
  );
}
