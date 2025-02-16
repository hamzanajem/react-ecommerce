import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../redux/userSlice';

const Rogister = ({ setIsModelOpen, setIsLogin }) => {
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();

    const [alertMessage, setAlertMessage] = useState("");
    const [userinfo, setUserinfo] = useState({
        name: '',
        email: '',
        password: ''
    });
    const hundleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(userinfo).every(item => item !== '')) {
            dispatch(addUser(userinfo));
            setIsModelOpen(false);
        }
        else {
            setAlertMessage(<div className='mt-4 text-sm'>
                <span className="font-medium  text-red-600">Info alert!</span> Enter all Information. </div>)
        }



    }
    return (
        <div>

            <h2 className='text-2xl font-bold mb-4'>Sign Up</h2>
            <form>
                <div className='mb-4'>
                    <label className='text-gray-700'>Name</label>
                    <input type='text' className='w-full px-3 py-2 border' placeholder='name' onChange={(e) => setUserinfo({ ...userinfo, name: e.target.value })} />
                </div>
                <div className='mb-4'>
                    <label className='text-gray-700'>Email</label>
                    <input type='email' className='w-full px-3 py-2 border' placeholder='enter email' onChange={(e) => setUserinfo({ ...userinfo, email: e.target.value })} />
                </div>
                <div className='mb-4'>
                    <label className='text-gray-700'>Password</label>
                    <input type='Password' className='w-full px-3 py-2 border' placeholder='enter password' onChange={(e) => setUserinfo({ ...userinfo, password: e.target.value })} />
                </div>

                <div className='mb-4'>
                    <button type='submit' className='w-full bg-red-600 text-white py-2' onClick={(e) => { hundleSubmit(e) }}> Sign Up</button>
                    {alertMessage && (alertMessage)}
                </div>

            </form>
            <div className='text-center'>
                <span className='text-gray-700'> Already Have Account?</span>
                <button className='text-red-800' onClick={() => { setIsLogin(true) }}> Login</button>

            </div>
        </div>
    )
}

export default Rogister