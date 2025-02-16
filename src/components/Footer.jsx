import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className=' py-8 bg-gray-800 px-3 sm:px-2.5 md:px-4 lg:px-20'>
            <div className='container mx-auto   grid md:grid-cols-3 gap-8 text-white' >
                <div className='space-y-4  '>
                    <h3 className=' text-xl font-semibold'>HN-shop</h3>
                    <p className=' mt-4 '> Your one-stop shop for all your needs.Shop with us and experience the best online shopping experience.
                    </p>
                </div>
                <div className=' flex flex-col md:items-center'>
                    <h3 className='text-xl font-semibold'>Quick Links</h3>
                    <ul className='space-y-2 mt-4  '>
                        <li><Link to={'/'} className='hover:text-red-700'> home</Link></li>
                        <li> <Link to={'/shop'} className='hover:text-red-700'>shop </Link></li>
                        <li> <Link className='hover:text-red-700'> about as </Link></li>
                        <li> <Link className='hover:text-red-700'>contact </Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-xl font-semibold'>Folow as</h4>
                    <div className='flex  space-x-4 mt-4'>
                        <a href=''><FaFacebook className='hover:text-blue-800' /></a>
                        <a href=''><FaX className='hover:text-black' /></a>
                        <a href=''><FaGithub className='hover:text-gray-600' /></a>
                        <a href=''><FaLinkedin className='hover:text-blue-600' /></a>
                    </div>
                    <form className='flex items-center justify-center mt-8'>
                        <input type='email' placeholder='Enter Email' className='w-full  p-2 rounded-l-lg bg-gray-800 border border-gray-600' />
                        <button className='bg-red-600 text-white  px-4 py-2 rounded-r-lg border border-gray-600'> Subscribe</button>
                    </form>
                </div>
            </div>
            <div className='mt-8 border-t border-gray-700 pt-4 text-white text-sm'>
                <div className='container mx-auto  flex flex-col md:flex-row justify-between items-center'>
                    <p>&copy;2025 developed by H.najem</p>
                    <div className='flex space-x-6 mt-4 md:mt-0'>
                        <a href=''> Privaci Policy</a>
                        <a href=''> Terms & Conditions </a>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer