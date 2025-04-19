import React from 'react'
import { Link } from 'react-router-dom'

export const navbar = () => {
  return (
    <div className='flex justify-between items-center text-sm mb-10'>
        <Link to={"/"} className='font-black text-xl'>Wardrobe</Link>
        <div className='flex'>
            <Link to={"/"} className='bg-beigeD p-2 rounded-sm rounded-r-none'>Home</Link>
            <Link to={"/create"} className='bg-beigeD p-2 rounded-sm rounded-l-none'>Create</Link>
        </div>
        
    </div>
  )
}

export default navbar