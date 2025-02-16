import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderConfirmation = ({ order }) => {
    const navigate = useNavigate();

    return (
        <div className='mt-32  px-3 sm:px-2.5 md:px-4 lg:px-14 container mx-auto '>
            <h2 className='text-2xl font-semibold mb-4 '>Thank you for your order</h2>

            <p>Your order has been placed successfuly you wili recieve an email confirmation</p>
            <div className='bg-gray-100 mt-6 p-4 border rounded-lg'>
                <h3 className='text-lg font-semibold mb-2'> Order Summary</h3>
                <p>Order Number:{order.orderNumber}</p>
                <div className='mt-4'>
                    <h2 className='text-md font-semibold mb-2 '> Shipping Information </h2>
                    <p> {order.shippingInformation.adress} </p>
                    <p> {order.shippingInformation.city} </p>
                    <p> {order.shippingInformation.zip} </p>
                </div>
                <div className='mt-4'>
                    <h3 className='text-md font-semibold mb-2'>items Ordered</h3>
                    {order.products.map((product, key) => <div key={key} className=' flex justify-between'>
                        <p> {product.name.split(" ").slice(0, 3).join(" ")} x {product.quantity}</p>
                        <p>${product.subTotalPrice.toFixed(2)}</p>
                    </div>)}
                </div>
                <div className='mt-4 flex justify-between'><span>Total Price:</span>
                    <span className='font-semibold'> ${order.totalPrice.toFixed(2)}</span>
                </div>

            </div>
            <div className='my-4 space-x-3 '>
                <button className='bg-green-500 text-white py-2 px-4 hover:bg-green-600'>Order Tracking</button>
                <button className='bg-red-500 text-white py-2 px-4 hover:bg-red-600 ' onClick={() => navigate('/')}>Continue Shopping</button>
            </div>

        </div>
    )
}

export default OrderConfirmation