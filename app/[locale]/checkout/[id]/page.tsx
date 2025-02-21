import { redirect } from 'next/navigation'
import React from 'react'

import { getOrderById } from '@/lib/actions/order.actions'

export const metadata = {
  title: 'Payment',
}

const CheckoutPaymentPage = async (props: {
  params: Promise<{
    id: string
  }>
}) => {
  const params = await props.params
  const { id } = params

  const order = await getOrderById(id)
  if (!order) redirect('/shop')

  return (
    <div>
      <h1>Order Summary</h1>
      <p>Order ID: {order._id}</p>
      <p>Total Price: ${order.totalPrice}</p>
      <p>Payment Method: {order.paymentMethod}</p>
      {/* Add more order details here */}
    </div>
  )
}

export default CheckoutPaymentPage
