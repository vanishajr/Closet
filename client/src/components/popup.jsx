import React from 'react'

export const popup = ({message, onClose}) => {
  return (
    <div className='fixed bottom-1/2 flex items-center justify-center'>
        <div className='bg-white p-5 border-b-4 border-l-4 rounded-xl text-center'> 
            <p>{message}</p>
            <button 
            onClick={onClose}
            className='mt-4 bg-gray-800 text-white py-2 px-4 rounded-xl' >
                Close
            </button>
        </div>
    </div>
  )
}

export default popup;
