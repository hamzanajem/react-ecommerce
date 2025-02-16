import React, { Children } from 'react'
import ChangeAdresse from './ChangeAdresse'


const Model = ({ isModelOpen, setIsModelOpen, children }) => {
    return (
        <div className=' fixed inset-0 px-4  bg-gray-800 bg-opacity-75 z-50 flex items-center justify-center'>
            {console.log(isModelOpen)};
            <div className=' bg-white rounded-lg shadow-lg p-6  w-full max-w-md'>
                <button className=' absolute right-4 top-4 text-gray-400 text-3xl' onClick={() => { setIsModelOpen(false) }}>
                    &times;</button>

                {children}
            </div>
        </div>
    )
}

export default Model