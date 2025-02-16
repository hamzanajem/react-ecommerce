import React, { useEffect, useState } from 'react'
import { FaCarSide, FaQuestion } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { AddToCart, RemoveFromCart } from '../redux/cartSlice';

const ProductDetail = () => {
    const { id } = useParams();
    const { products } = useSelector(state => state.products);
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const cartproduct = useSelector(state => state.cart);
    const addedtocard = cartproduct.products.find((item) => item.id === parseInt(id));

    const dispatch = useDispatch();

    useEffect(() => {
        const newProduct = products.find((product) => product.id === parseInt(id));
        setProduct(newProduct);


    }, [id, products])
    const handleAddTocard = (e, product) => {
        e.preventDefault();
        dispatch(AddToCart({ ...product, quantity: quantity }))
    }
    const handleRemoveFromCart = (e, product) => {
        e.preventDefault();
        dispatch(RemoveFromCart(product))
    }
    if (!product) {
        return <div className="mt-80 text-center text-gray-500">Loading product details...</div>; // ✅ Prevents errors when `product` is null
    }

    return (
        <div className='mt-24  container mx-auto pb-20  px-3 sm:px-2.5 md:px-4 lg:px-14'>
            {console.log('addedtocard', addedtocard)}
            <div className=' flex flex-col md:flex-row justify-center items-start gap-4'>
                <div className=' w-full md:w-1/2 h-96 py-8 content-center shadow-md md:px-8 bg-white '>
                    <img src={product.image} alt={product.title} className='w-full h-full object-contain' />
                </div>
                <div className=' w-full md:w-1/2 md:h-96 py-4 shadow-md md:p-16 flex flex-col items-center px-8 space-y-2 bg-white ' >
                    <h2 className='  text-2xl md:text-3xl font-semibold mb-2'>{product.title}</h2>
                    <p className='text-xl font-semibold text-gray-800 mb-4'> ${product.price}</p>
                    <div className='flex items-center mb-4 space-x-2'>
                        <input id='quantity' type='number' min='1' className='border p-1 w-16' defaultValue={1} onKeyDown={(e) => e.key === '-' && e.preventDefault()} onChange={(e) => setQuantity(Number(e.target.value))} />
                        {addedtocard ? <button className='bg-green-600 text-white py-1.5 px-4  hover:bg-green-800' onClick={(e) => handleRemoveFromCart(e, addedtocard)}> Remove from cart</button> :
                            <button className='bg-red-600 text-white py-1.5 px-4  hover:bg-red-800' onClick={(e) => handleAddTocard(e, product)}> Add to card</button>}

                    </div>
                    <div className='flex flex-col gap-y-4 mt-4'>
                        <p className='flex items-center'>
                            <FaCarSide className='mr-1' />
                            Delevery & Return

                        </p>
                        <p className='flex items-center'>
                            <FaQuestion className='mr-1' />
                            Ask  a Question

                        </p>

                    </div>
                </div>


            </div>
            <div className='mt-8'>
                <h3 className='text-xl font-bold mb-2'>Product Description</h3>
                <p> {product.description}</p>
            </div>

        </div>
    )
}

export default ProductDetail