import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsSignUp } from '../redux/userSlice';

const Loging = ({ setIsLogin, setIsModelOpen }) => {
    const { user } = useSelector(state => state.user);

    const dispatch = useDispatch();

    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''

    });
    const [alertMessage, setAlertMessage] = useState("");


    const hundlelogin = () => {

        if (loginInfo.email === user.email && loginInfo.password === user.password) {
            console.log('hamza');
            dispatch(setIsSignUp());
            setIsModelOpen(false);
        }
        else {
            setAlertMessage(<div className='mt-4 text-sm'>
                <span className="font-medium  text-red-600">Info alert!</span> email or password inccorect hihih</div>)
        }

    }


    const hundleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(loginInfo).every(item => item !== '')) {

            hundlelogin();

        }
        else {
            setAlertMessage(<div className='mt-4 text-sm'>
                <span className="font-medium  text-red-600">Info alert!</span> email or password inccorect </div>)
        }

    }
    return (

        <div>
            <h2 className='text-2xl font-bold mb-4'>Login</h2>


            <form>
                <div className='mb-4'>
                    <label className='text-gray-700'>Email</label>
                    <input type='email' className='w-full px-3 py-2 border' placeholder='enter email' onChange={(e) => setLoginInfo({ ...loginInfo, email: e.target.value })} />
                </div>
                <div className='mb-4'>
                    <label className='text-gray-700'>Password</label>
                    <input type='Password' className='w-full px-3 py-2 border' placeholder='enter password' onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })} />
                </div>
                <div className='mb-4 flex items-center justify-between'>
                    <label className='inline-flex items-center'>
                        <input type='checkbox' className='form-checkbox' />
                        <span className='ml-2 text-gray-700'>Remember Me</span>
                    </label>
                    <a href='#' className='text-red-800'> Forgot Password </a>

                </div>
                <div className='mb-4'>
                    <button type='submit' className='w-full bg-red-600 hover:bg-red-800 text-white py-2' onClick={(e) => { hundleSubmit(e) }}> Login</button>
                    {alertMessage}
                </div>

            </form>
            <div className='text-center'>
                <span className='text-gray-700'> Don't Have Account?</span>
                <button className='text-red-800' onClick={() => setIsLogin(false)}> Sign Up</button>

            </div>
        </div>
    )
}

export default Loging