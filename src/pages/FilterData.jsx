import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

const FilterData = () => {
    const products = useSelector(state => state.products.filtredProduct);
    return (
        <div className=' mt-24 pb-20  px-3 sm:px-2.5 md:px-4 lg:px-14'>
            {products.length ? <div className='container mx-auto '>
                <h1 className='text-center text-xl font-bold  mb-6 mt-8 '>shop</h1>
                <div className='grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-5 lg:gap-3 cursor-pointer '>
                    {products.map((product, key) =>
                        <ProductCard key={key} product={product} />
                    )
                    }
                </div>
            </div> : <div className=' container mx-auto flex items-center justify-center'> <img src='assets/product-not-found.png' /></div>}


        </div>
    )
}

export default FilterData