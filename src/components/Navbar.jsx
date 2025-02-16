import { Modal } from 'flowbite-react';
import { useState } from 'react';
import { FaSearch, FaShoppingCart, FaSign, FaUser, FaUserCircle, FaUserMd } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Loging from './Loging';
import Model from './model';
import Rogister from './Rogister';
import { BiLogOut } from 'react-icons/bi';
import { setIsSignUp } from '../redux/userSlice';
import { setSearchTerm } from '../redux/productSlice';

const Navbar = () => {
    const { products } = useSelector(state => state.cart);
    const filtredProducts = useSelector(state => state.products.filtredProduct);
    const serchTerm = useSelector(state => state.products.SearchTerm);
    const { user, IsSignUp } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [userToggle, setUserToggle] = useState(false);
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [search, setSearch] = useState('');

    const hundleUser = () => {
        setIsModelOpen(true);

    }
    const hundleLogout = () => {
        dispatch(setIsSignUp());
        setUserToggle(false);
    }
    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
        dispatch(setSearchTerm(search));
        navigate('/filtred-products')

    }
    return (
        <nav className=' bg-white shadow-md fixed  z-50 top-0 inset-x-0'>
            {console.log('filtredProducts', filtredProducts)}
            {console.log('serchTerm', serchTerm)}

            {console.log('search', search)}
            {isModelOpen && (<Model setIsModelOpen={setIsModelOpen} > {isLogin ? <Loging setIsLogin={setIsLogin} setIsModelOpen={setIsModelOpen} /> : <Rogister setIsLogin={setIsLogin} setIsModelOpen={setIsModelOpen} />}  </Model>)}

            <div className='container  mx-auto px-2 sm:px-4 md:px-16 lg:px-24 pt-3  flex justify-between   items-center '>
                <div className='text-lg font-extrabold'>
                    <Link to={"/"}> HN-SHOP</Link >
                </div>
                <div className='relative flex-1 mx-4'>
                    <form >
                        <input type='text' placeholder='Serach Product' className='w-full border rounded-md px-4 py-2' onChange={(e) => handleSearch(e)} />
                        <FaSearch className=' absolute top-3 right-3 text-red-600' />
                    </form>
                </div>
                <div className=' relative flex  items-center space-x-4'>
                    <Link to={"/cart"} className=' relative'>
                        <FaShoppingCart className='  text-lg ' />
                        {products.length > 0 && (<span className='absolute top-0 left-3 w-5 h-5 rounded-full bg-red-600 text-white text-xs  flex justify-center items-center text-center'> {products.length}</span>)}
                    </Link>


                    {IsSignUp ? <button className=' hidden md:flex items-center space-x-1 font-bold text-lg cursor-pointer' onClick={() => setUserToggle(!userToggle)}>   <span className='primary-color '> {user.name.slice(0, 11)} </span> </button> : <button className='hidden md:block font-medium' onClick={() => hundleUser()}>Login | Register</button>}
                    <div className={`absolute top-8    right-0 z-50 bg-primary-color rounded-b-lg border   text-gray-800 w-32 p-3 space-y-4 ${userToggle ? " " : "hidden"} `}  >
                        <p className=' font-semibold'>{user.name.slice(0, 11)}</p>
                        <button className=' w-full flex items-center justify-start space-x-2 font-semibold' onClick={() => { hundleLogout() }}> <BiLogOut /> <span> Log Out</span>    </button>

                    </div>


                    {IsSignUp ? <button className=' block md:hidden items-center space-x-1 font-bold text-lg cursor-pointer' onClick={() => setUserToggle(!userToggle)}>  <span className='primary-color '> {user.name.slice(0, 5)} </span> </button> : <button className='block md:hidden font-medium' onClick={() => hundleUser()}><FaUser /></button>}



                </div>
            </div>
            <div className='text-sm font-bold '>
                <ul className='flex justify-center items-center space-x-10 py-2'>
                    <li className="relative group">
                        <Link to={'/'}> Home</Link>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="relative group">
                        <Link to={'/shop'}> Shop</Link>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="relative group">
                        <Link to={'https://hamzanajem.github.io/hamza-najem/'} target='_blank '> Contact</Link>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="relative group">
                        <Link to={'/'}> About</Link>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </ul>
            </div>


        </nav >
    )
}

export default Navbar