import React from 'react'
import { useClothStore } from '../store/clothes'

export const OutfitCard = ({ cloth, onUpdate }) => {
    const {deleteClothes} = useClothStore();

    const handleDelete = async (pid) => {
        const {success, message} = await deleteClothes(pid);
    }

  return (
    <div>
        <div className='p-5 flex flex-col gap-2 bg-beigeD rounded-xl hover:border-green hover:border-l-4 hover:border-b-4'>
            <img src={cloth.image} alt={cloth.name} className='w-full object-contain h-48' />
            <p className='font-bold'>{cloth.name}</p>
            <p className='text-green font-bold'>{cloth.vibe}</p>
            <div className='flex gap-2'>
                <button className='bg-greyD cursor-pointer hover:opacity-80 text-sm rounded-2xl text-white p-2'
                    onClick={()=> onUpdate(cloth)}>Update</button>
                <button className='bg-greyD cursor-pointer hover:opacity-80 text-sm rounded-2xl text-white p-2'
                    onClick={()=>handleDelete(cloth._id)}
                    >Delete</button>
            </div>
        </div>
    </div>
  )
}
