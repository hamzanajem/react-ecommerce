import { useEffect, useState } from 'react'

import CategorySection from '../components/CategorySection'
import InfoSection from '../components/InfoSection'
import { useDispatch, useSelector } from 'react-redux'




import ProductCard from '../components/ProductCard'
import Shop from './Shop'

import fetchProducts from "../redux/thunks/fetchProducts";
import fetchCategories from '../redux/thunks/fetchCategories'
import { Link, useNavigate } from 'react-router-dom'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
const Home = () => {



    const dispatch = useDispatch();
    const { products } = useSelector(state => state.products);
    const { categories } = useSelector(state => state.categories);
    const cart = useSelector(state => state.cart);
    const navigate = useNavigate();
    const [categoryToggle, setCategoryToggle] = useState(false);

    useEffect(() => {

        dispatch(fetchCategories());
        dispatch(fetchProducts());

    }, [dispatch])

    return (
        <div className=' mt-24  py-4  px-3 sm:px-2.5 md:px-4 lg:px-20'>

            < div className='container mx-auto space-y-2 md:space-y-8 ' >
                <div className=' flex flex-col sm:flex-row      sm:space-x-2 space-y-2 sm:space-y-0 '>
                    <div className='sm:w-3/12   '>
                        <div className=' hidden sm:block text-xs  md:text-sm font-bold tracking-wider bg-gradient-to-r from-black to-gray-800 text-white px-2 lg:px-4 py-3'>SHOP BY CATEGORIES</div>
                        <ul className='hidden sm:block p-4 space-y-3 bg-gray-100 border shadow-lg'>
                            {categories.map((category, key) => <li key={key} className='  text-sm font-medium hover:text-red-600 cursor-pointer  duration-300'><Link to={`/products/${category}`} >{category.charAt(0).toUpperCase() + category.slice(1)}</Link></li>)}
                        </ul>
                        <div className='block sm:hidden  p-1'>
                            <div className='flex justify-between cursor-pointer text-sm font-semibold' onClick={() => setCategoryToggle(!categoryToggle)}>
                                <h3>Shop by categories</h3>
                                {categoryToggle ? <FaAngleUp /> : <FaAngleDown />}

                            </div>
                            <ul className={`p-4 space-y-3 bg-gray-100 border shadow-lg ${categoryToggle ? 'block' : 'hidden'}`}>
                                {categories.map((category, key) => <li key={key} className='  text-sm font-medium hover:text-red-600 cursor-pointer border-b duration-300'><Link to={`/products/${category}`} >{category.charAt(0).toUpperCase() + category.slice(1)}</Link></li>)}
                            </ul>
                        </div>


                    </div>

                    <div className=' sm:w-9/12  bg-primary-color relative  px-2.5  sm:px-4  md:px-6 lg:px-10 xl:px-20 sm:h-80 lg:h-96 '>

                        <div className='  mt-14 mb-16 text-white space-y-3 lg:space-y-5  ' >
                            <p className='text-lg font-medium tracking-wide text-gray-200'> Code with H.Najem</p>
                            <h2 className='text-xl sm:text-2xl lg:text-3xl font-extrabold '>  WELCOME TO HN-SHOP</h2>
                            <p className='text-sm  sm:text-md  tracking-wide'> MILLIONS + PRODUCTS</p>
                            <Link to={'/shop'}> <button className=' px-3 py-1 sm:px-6 sm:py-3 bg-white  text-red-600 font-bold rounded-md shadow-2xl hover:scale-105
 hover:bg-red-100 transition-all duration-300' >SHOP NOW</button> </Link>
                        </div>
                        <div className=' absolute   top-4  right-0 md:right-2  lg:right-8  xl:right-20 bottom-0 '>
                            <img className='   h-full object-cover' src='assets/gir-shop.png' alt='shop' />
                        </div>

                    </div>

                </div >
                <InfoSection />
                <CategorySection />
                <div >
                    <h1 className='text-center text-xl font-bold  mb-6 '>Top Products</h1>
                    <div className='grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-5 lg:gap-3 cursor-pointer items-center '>
                        {products.slice(0, 5).map((product, key) => {

                            return product.rating.rate >= 2 ? <ProductCard key={key} product={product} topProduct={true} /> : "";
                        }
                        )
                        }
                    </div>
                </div>
                <div >
                    <h1 className='text-center text-xl font-bold  mb-6 '>New Products</h1>
                    <div className='grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-5 lg:gap-3 cursor-pointer items-center '>
                        {products.slice(-5).map((product, key) =>

                            <ProductCard key={key} product={product} newProduct={true} />

                        )
                        }
                    </div>
                </div>


            </div >
            <Shop />
        </div>
    )
}

export default Home