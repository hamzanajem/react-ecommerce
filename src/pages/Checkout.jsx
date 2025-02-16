import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearState } from '../redux/cartSlice';

const Checkout = ({ setOrder }) => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [billingToggle, setBillingToggle] = useState(true);
    const [shippingToggle, setSippingToggle] = useState(false);
    const [paymentToggle, setPaymentToggle] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('cod');

    const [alertMessage, setAlertMessage] = useState("");

    const [shippingInfo, setShippingInfo] = useState({
        adress: '',
        city: '',
        zip: '',
        name: '',
        email: '',
        phone: '',


    })


    const isObjectEmpty = (obj) => {
        return Object.values(obj).every(value =>
            value !== "")
    }

    const hundleOrder = () => {

        setAlertMessage("");
        if (isObjectEmpty(shippingInfo)) {
            const newOrder = {
                products: cart.products,
                orderNumber: Math.random(),
                shippingInformation: shippingInfo,
                totalPrice: cart.totalPrice
            }
            navigate('/order-confirmation')
            setOrder(newOrder);
            dispatch(clearState());

        }
        else {
            setAlertMessage(<div className='mt-4 text-sm'>
                <span className="font-medium  text-red-600">Info alert!</span> Enter all Information. </div>)
        }

    }


    return (
        <div className='   mt-32  px-3 sm:px-2.5 md:px-4 lg:px-14'>
            < div className='container mx-auto '>
                <h3 className='text-2xl font-semibold mb-4'>CHECKOUT</h3>
                <div className='flex flex-col  md:flex-row  space-y-6 md:space-x-10  md:space-y-0 mt-8 items-start'>
                    <div className='w-full md:w-2/3'>
                        <div className='border  p-2 mb-6 '>
                            <div className='flex justify-between items-center  cursor-pointer ' onClick={() => setBillingToggle(!billingToggle)}>
                                <h3 className='text-lg font-semibold mb-2'>Billing information </h3>
                                {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
                            </div>
                            <div className={` space-y-4 ${billingToggle ? " " : "hidden"} `}  >

                                <div className=''>
                                    <label className='text-gray-700'>Name</label>
                                    <input type='text' name='name' placeholder='Enter name' value={shippingInfo.name} className='w-full px-3 py-2 border  ' onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })} />
                                </div>
                                <div className=''>
                                    <label className='text-gray-700'>E-mail</label>
                                    <input type='email' name='email' placeholder='Enter e-mail' className='w-full px-3 py-2 border  ' value={shippingInfo.email} onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })} />
                                </div>
                                <div className=''>
                                    <label className='text-gray-700'>phone</label>
                                    <input type='phone' name=' phone' placeholder='Enter phone' className='w-full px-3 py-2 border  ' value={shippingInfo.phone} onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })} />
                                </div>
                            </div>


                        </div>
                        <div className='border  p-2 mb-6 '>
                            <div className='flex justify-between items-center  cursor-pointer ' onClick={() => setSippingToggle(!shippingToggle)}>
                                <h3 className='text-lg font-semibold mb-2'>Shipping  information </h3>
                                {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
                            </div>
                            <div className={` space-y-4 ${shippingToggle ? " " : "hidden"} `}  >

                                <div className=''>
                                    <label className='text-gray-700'>Adress</label>
                                    <input type='text' name='adress' placeholder='Enter adress' className='w-full px-3 py-2 border  ' onChange={(e) => setShippingInfo({ ...shippingInfo, adress: e.target.value })} />
                                </div>
                                <div className=''>
                                    <label className='text-gray-700'>City</label>
                                    <input type='text' name='city' placeholder='Enter city' className='w-full px-3 py-2 border  ' onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })} />
                                </div>
                                <div className=''>
                                    <label className='text-gray-700'>Zip code</label>
                                    <input type='number' name=' zip-code' placeholder='Enter phone' className='w-full px-3 py-2 border  ' onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value })} />
                                </div>
                            </div>


                        </div>
                        <div className='border  p-2 mb-6 '>
                            <div className='flex justify-between items-center  cursor-pointer ' onClick={() => setPaymentToggle(!paymentToggle)}>
                                <h3 className='text-lg font-semibold mb-2'>Payment method </h3>
                                {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
                            </div>
                            <div className={` space-y-4  ${paymentToggle ? " " : "hidden"} `}  >

                                <div className=' flex   items-center mb-2'>
                                    <input type='radio' name='cod' placeholder='Enter name' checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} />
                                    <label className='text-gray-700 ml-2'>cash on delivery</label>

                                </div>
                                <div className=' flex   items-center mb-2'>
                                    <input type='radio' name='dc' placeholder='Enter name' checked={paymentMethod === 'dc'} onChange={() => setPaymentMethod('dc')} />
                                    <label className='text-gray-700 ml-2'>debit cart</label>

                                </div>
                                {paymentMethod === 'dc' && (
                                    <div className='bg-gray-100 p-4 rounded-lg mb-4'>
                                        <h3 className='text-xl font-semibold mb-4'>
                                            Debit Cart Information
                                        </h3>

                                        <div className='mb-4'>
                                            <label className='  font-semibold mb-2 text-gray-700'>Card Number</label>
                                            <input type='text' name='Card_Number' placeholder='Card Number' className='w-full p-2  border   rounded' />
                                        </div>
                                        <div className=' mb-4'>
                                            <label className='font-semibold mb-2 text-gray-700'>Card Holder Name</label>
                                            <input type='text' name='Card_Holder_Name' placeholder='Enter Card Holder Name' className='w-full p-2 border  rounded ' />
                                        </div>
                                        <div className='flex justify-between mb-2'>
                                            <div className=''>
                                                <label className='font-semibold mb-2 text-gray-700'>Expire Date</label>
                                                <input type='text' name='date' placeholder='Enter adress' className='w-full p-2 border rounded  ' />
                                            </div>
                                            <div className=' '>
                                                <label className='font-semibold mb-2 text-gray-700'>CVV</label>
                                                <input type='text' name='CVV' placeholder='Enter cvv' className='w-full p-2 border  rounded ' />
                                            </div>

                                        </div>
                                    </div>

                                )}
                            </div>


                        </div>

                    </div>




                    <div className=' w-full md:w-1/3  bg-white p-6 rounded-lg shadow-md border'>
                        <h3 className='text-lg font-semibold mb-4 '>Order Summary</h3>
                        <div className='   border-b  space-y-4'>
                            {cart.products.map(((product, key) =>
                                <div className='flex justify-between items-center pb-1' key={key}>
                                    <div className='flex items-center '>
                                        <img src={product.image} alt={product.name} className='w-16 h-16 object-contain rounded' />
                                        <div>
                                            <h4 className='text-sm md:text-md font-semibold' >{product.name.split(" ").slice(0, 2).join(" ")}</h4>
                                            <span className='text-gray-600'>{product.price} x {product.quantity}</span>
                                        </div>
                                    </div>

                                    <span className='text-gray-800'>${(product.subTotalPrice).toFixed(2)}</span>
                                </div>
                            ))}

                        </div>
                        <div className='mt-4 pt-4'>
                            <div className='flex justify-between items-center'>
                                <span>Total Price</span>
                                <span className='font-semibold'>${cart.totalPrice.toFixed(2)}</span>
                            </div>
                            <button className='w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800' onClick={hundleOrder}> Place Order</button>
                            {alertMessage}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout