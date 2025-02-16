import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Category = () => {
    const { category } = useParams();

    const products1 = useSelector(state => state.products.products);
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const newProducts = products1.filter((product) => {
            if (product.category === category) {
                return product
            }
        });
        setProducts(newProducts);


    }, [category, products1])


    if (!products) {
        return <div className="mt-80 text-center text-gray-500"> Loading product details...</div>; // ✅ Prevents errors when `product` is null
    }
    return (
        <div className=' mt-28 pb-20  px-3 sm:px-2.5 md:px-4 lg:px-14'>

            <div className='container mx-auto '>
                <h1 className='text-center text-xl font-bold  mb-6 mt-8 '> {category.charAt(0).toUpperCase() + category.slice(1)} products</h1>
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

export default Category