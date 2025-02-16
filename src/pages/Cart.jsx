import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux'
import { AddToCart, descreaseQuantity, increaseQuantity, RemoveFromCart } from '../redux/cartSlice';
import Model from '../components/model';
import ChangeAdresse from '../components/ChangeAdresse';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const [address, setAddress] = useState('main street,0012');
    const [isModelOpen, setIsModelOpen] = useState(false);


    return (
        <div className='   mt-32  px-3 sm:px-2.5 md:px-4 lg:px-14'>
            {cart.products.length > 0 ?
                < div className='container mx-auto '>
                    <h3 className='text-2xl font-semibold mb-4'>SHOPPING CART</h3>
                    <div className='flex flex-col  md:flex-row  items-start space-y-6 md:space-x-10  md:space-y-0 mt-8'>
                        <div className='md:w-2/3 w-full'>
                            <div className=" grid grid-cols-5 gap-6 border-b pb-3 text-sm font-semibold text-gray-700">
                                <p className="col-span-2">Product</p>
                                <p className="text-center">Price</p>
                                <p className="text-center">Quantity</p>
                                <p className="text-center">Subtotal</p>
                            </div>
                            <div >
                                {
                                    cart.products.map((product, key) =>
                                    (
                                        <div key={key} className='relative grid  grid-cols-5 gap-6 items-center border-b py-3'>

                                            <div className='flex items-center space-x-4 col-span-2 '>

                                                <img src={product.image} alt={product.name} className='w-16 h-16 object-contain rounded' />

                                                <h3 className='text-sm md:text-lg font-semibold' >{product.name.split(" ").slice(0, 2).join(" ")}</h3>
                                            </div>


                                            <p className='text-center'>${product.price}</p>
                                            <div className='flex justify-center space-x-2 '>
                                                <button className='text-xl font-bold px-1.5 border-r text-green-600' onClick={() => { dispatch(descreaseQuantity(product)) }}>-</button>
                                                <p className='text-xl px-2 '>{product.quantity}</p>
                                                <button className='text-xl font-bold px-1.5 border-l text-green-600' onClick={() => { dispatch(increaseQuantity(product)) }}>+</button>
                                            </div>
                                            <p className='text-center'>${(product.subTotalPrice).toFixed(2)}</p>



                                            <button className="absolute right-1 top-1 text-red-500 hover:text-red-700" onClick={() => dispatch(RemoveFromCart(product))}>
                                                <FaTrashAlt />
                                            </button>




                                        </div>



                                    )

                                    )
                                }
                            </div>
                        </div>
                        <div className='md:w-1/3  bg-white p-6 rounded-lg shadow-md border w-full'>
                            <h3 className='text-sm font-semibold mb-5 '>CART TOTAL</h3>
                            <div className='flex justify-between mb-5 border-b pb-1'>
                                <span className='text-sm'>Total items:</span>
                                <span>{cart.totalQuantity}</span>
                            </div>
                            <div className='mb-4 border-b pb-2'> <p>Shipping:</p>
                                <p className='ml-2'>Shipping to:{" "}
                                    <span className=' font-semibold '>{address}</span></p>
                                <button className='text-blue-500 hover:underline mt-1 ml-2 ' onClick={() => setIsModelOpen(true)}> change address</button>
                            </div>
                            <div className='flex justify-between mb-4'> <span>Total Price:</span>
                                <span>${cart.totalPrice.toFixed(2)}</span>
                            </div>
                            <button className='w-full bg-red-600 text-white py-2 hover:bg-red-800' onClick={() => navigate('/checkout')}> Proced to checkout</button>
                            {isModelOpen && (<Model isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}  > <ChangeAdresse setAddress={setAddress} setIsModelOpen={setIsModelOpen} /> </Model>)}
                        </div>

                    </div>
                </div> :

                <div className='flex justify-center'>
                    <img src='/assets/16961608.png' />
                </div>}

        </div>
    )
}

export default Cart