import React, { useState } from 'react'

const ChangeAdresse = ({ setAddress, setIsModelOpen }) => {
    const [newAdress, setNewAdress] = useState(null);
    const onClose = () => {
        if (newAdress) {
            setAddress(newAdress);
            setIsModelOpen(false);
        }

    }
    return (
        <div>  <h3 className='font-semibold text-xl mb-4'>Change shipping address</h3>
            <input type='text' placeholder='enter new address ' className='border p-2 w-full mb-4' onChange={(e) => setNewAdress(e.target.value)} />
            <div className='flex justify-end'>
                <button className='bg-gray-500 text-white py-1 px-4 rounded mr-2 ' onClick={() => { setIsModelOpen(false) }} > cancel</button>
                <button className='bg-blue-500 text-white py-1 px-4 rounded' onClick={() => { onClose() }}> save address </button>
            </div>
        </div>
    )
}

export default ChangeAdresse