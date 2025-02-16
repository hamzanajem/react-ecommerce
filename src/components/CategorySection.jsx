import React from 'react'
import { Link } from 'react-router-dom'

const CategorySection = () => {
    return (
        <div className='grid  md:grid-cols-3 gap-3 '>
            <div className='relative flex justify-between bg-primary-color  rounded-lg shadow-md px-20 md:px-2 lg:px-8 h-56   cursor-pointer duration-300  ease-in-out  transition-transform hover:scale-105 '>
                <div className='absolute bottom-0 right-2 top-2 mt-3'> <img src='assets/man.png' alt='men' className='w-full h-full object-cover' /></div>

                <div className='content-center'><h1 className='text-xl font-bold text-white'>Men</h1>  < p className='text-gray-700  text-md mt-2 cursor-pointer hover:underline'><Link to={`/products/men's clothing`}> View Allw</Link></p></div>
            </div>
            <div className='relative flex justify-between bg-primary-color rounded-lg shadow-md px-20 md:px-2 lg:px-8 h-56   cursor-pointer duration-300  ease-in-out  transition-transform hover:scale-105 '>
                <div className='absolute bottom-0 right-8 md:right-4 lg:right-10 top-2 mt-3'> <img src='assets/woman.png' alt='men' className='w-full h-full object-cover' /></div>

                <div className='content-center'><h1 className='text-xl font-bold text-white'>Women </h1>  < p className='text-gray-700  text-md mt-2 cursor-pointer hover:underline'> <Link to={`/products/women's clothing`}>View All</Link></p></div>
            </div>
            <div className='relative flex justify-between bg-primary-color rounded-lg shadow-md px-20 md:px-2 lg:px-8 h-56  cursor-pointer duration-300  ease-in-out  transition-transform hover:scale-105 '>
                <div className='absolute bottom-0 right-2 top-2 mt-3'> <img src='assets/kid.png' alt='men' className='w-full h-full object-cover' /></div>

                <div className='content-center'><h1 className='text-xl font-bold text-white'>Kids</h1>  < p className='text-gray-700  text-md mt-2 cursor-pointer hover:underline'> View All</p></div>
            </div>


        </div>
    )
}

export default CategorySection