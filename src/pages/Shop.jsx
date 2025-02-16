import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useSelector } from 'react-redux'

const Shop = () => {

    const products = useSelector(state => state.products.products);





    return (
        <div className=' mt-24 pb-20  px-3 sm:px-2.5 md:px-4 lg:px-14'>
            <div className='container mx-auto '>
                <h1 className='text-center text-xl font-bold  mb-6 mt-8 '>shop</h1>
                <div className='grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-5 lg:gap-3 cursor-pointer '>
                    {products.map((product, key) =>
                        <ProductCard key={key} product={product} />
                    )
                    }
                </div>
            </div>
        </div>
    )
}

export default Shop