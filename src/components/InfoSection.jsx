import React from 'react'
import { FaHeadset, FaLock, FaShippingFast, FaTag } from 'react-icons/fa'
import { FaMoneyBill1Wave } from 'react-icons/fa6'

const InfoSection = () => {
    const infoItems = [
        {
            icon: <FaShippingFast className='text-3xl   ' />,
            title: "Free shipping",
            description: "Get your orders delivered with no extra cost"
        },
        {
            icon: <FaHeadset className='text-3xl  ' />,
            title: "Support 24/7",
            description: "We are here to assist you anytime"
        },
        {
            icon: <FaMoneyBill1Wave className='text-3xl  ' />,
            title: "100% money back",
            description: "full refund if you are not satisfied"
        },
        {
            icon: <FaLock className='text-3xl  ' />,
            title: "Payemnt secure",
            description: "Your payment information safe with us "
        },
        {
            icon: <FaTag className='text-3xl  ' />,
            title: "Discount",
            description: "Onjoy the best prices on our products"
        }

    ]
    return (
        <div className='  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3   ' >
            {infoItems.map((item, key) => <div className=' hover:shadow-2xl cursor-pointer rounded-lg border shadow-md flex flex-col items-center   px-3 py-4 bg-white hover:scale-105 duration-500 ' key={key}> {item.icon} <h2 className=' mt-2 md:mt-4 text-md font-semibold text-gray-800 '>{item.title}</h2> <p className=' text-gray-800 mt-1 md:mt-2  text-center'>{item.description}</p></div>)}

        </div>
    )
}

export default InfoSection