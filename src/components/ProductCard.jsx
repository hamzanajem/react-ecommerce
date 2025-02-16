import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart, RemoveFromCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom'


const ProductCard = ({ product, newProduct, topProduct }) => {
    const cartproduct = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const addedtocard = cartproduct.products.find((item) => item.id === product.id);
    const hundleAddToCard = (e, product) => {
        e.preventDefault();
        dispatch(AddToCart(product));
    }

    const hundleRemoveFromCard = (e, product) => {
        e.preventDefault();
        dispatch(RemoveFromCart(product));
    }
    return (
        <Link to={`/product/${product.id}`}>

            <div className=' relative h-80 p-4 rounded-md bg-white shadow-lg border  hover:scale-105 duration-300'  >
                <div className='h-4/6 mb-4'>

                    {console.log('topProduct ', topProduct)}
                    <img src={product.image} alt={`${product.title.split("")[0]}.png`} className='w-full h-full object-contain' />
                </div>
                <div className=''>
                    <h2 className='font-semibold '>{product.title.split(" ").slice(0, 2).join(" ").substring(0, 10) + "..."}</h2>
                    <p className='font-medium text-gray-700'>{product.price} $</p>

                    <div className='flex items-center mt-2'>
                        {Array.from({ length: Math.floor(product.rating.rate) }, (_, i) => (
                            <FaStar className='text-yellow-500' key={`filled-${i}`} />
                        ))}
                        {Array.from({ length: 5 - Math.floor(product.rating.rate) }, (_, i) => (
                            <FaStar className='text-gray-500' key={`empty-${i}`} />
                        ))}


                    </div>

                    {addedtocard ?
                        <div className='absolute right-2 bottom-4 rounded-full flex items-center justify-center bg-green-600 hover:bg-green-700 group cursor-pointer text-white text-sm w-8 h-8  hover:w-32 duration-100 '>
                            <span className=' group-hover:hidden '>x</span>
                            <span className='hidden group-hover:block' onClick={(e) => { hundleRemoveFromCard(e, addedtocard) }} >remove from card</span></div>
                        :
                        <div className='absolute right-2 bottom-4 rounded-full flex items-center justify-center bg-red-600 hover:bg-red-700 group cursor-pointer text-white text-sm w-8 h-8  hover:w-24 duration-100 '>
                            <span className=' group-hover:hidden '>+</span>
                            <span className='hidden group-hover:block' onClick={(e) => { hundleAddToCard(e, product) }} >Add to card</span></div>
                    }

                </div>
                {newProduct && (<div className='absolute top-0 right-0 w-10 h-5 bg-gradient-to-r from-red-500 to-red-700 text-xs text-center font-bold text-white content-center '> New</div>)}
                {topProduct && (<div className='absolute top-0 right-0 w-10 h-5 bg-primary-color text-xs text-center font-bold text-white  content-center'> Top</div>)}

            </div>
        </Link>
    )
}

export default ProductCard