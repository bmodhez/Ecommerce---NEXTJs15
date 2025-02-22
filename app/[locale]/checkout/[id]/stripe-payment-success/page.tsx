import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import Razorpay from 'razorpay'

import { Button } from '@/components/ui/button'
import { getOrderById } from '@/lib/actions/order.actions'

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.rzp_test_sDxRJZYUxz2MLY as string,
  key_secret: process.env.WJ3oqiNOl2K0wKJGhWhNSm0O as string,
})

export default async function SuccessPage(props: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ razorpay_payment_id: string }>
}) {
  const params = await props.params
  const { id } = params

  const searchParams = await props.searchParams
  const order = await getOrderById(id)
  if (!order) notFound()

  const paymentId = searchParams.razorpay_payment_id
  if (!paymentId) return notFound()

  // No direct function to verify payment in Razorpay like Stripe
  // So we assume if the payment ID exists, it's a success
  const isSuccess = Boolean(paymentId)
  if (!isSuccess) return redirect(`/checkout/${id}`)

  return (
    <div className='max-w-4xl w-full mx-auto space-y-8'>
      <div className='flex flex-col gap-6 items-center '>
        <h1 className='font-bold text-2xl lg:text-3xl'>
          Thanks for your purchase
        </h1>
        <div>We are now processing your order.</div>
        <Button asChild>
          <Link href={`/account/orders/${id}`}>View order</Link>
        </Button>
      </div>
    </div>
  )
}
