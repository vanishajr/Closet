import React from 'react'
import { useState, useEffect } from 'react';
import { useClothStore } from '../store/clothes';

const Update = ({cloth, onClose}) => {
    const [newCloset, setNewCloset] = useState(cloth);
    useEffect(() => {
        setNewCloset(cloth);
    }, [cloth]);

    const {updateClothes} = useClothStore()

    const handleUpdate = async () => {
        const {success, message} = await updateClothes(newCloset._id, newCloset);
        //setNewCloset({name:"", vibe:"", image:""});
        onClose();
    }

  return (
    <div className='flex flex-col gap-4'>
        <h3>Update Outfit</h3>
        <div className='flex flex-col gap-5'>
            <input className='border-2 p-2 rounded-xl'
            placeholder='Enter name'
            name='name'
            value={newCloset.name}
            onChange={(e) => setNewCloset({...newCloset, name: e.target.value})}
            />
            <input className='border-2 p-2 rounded-xl'
             placeholder='Enter Vibe'
             name='vibe'
             value={newCloset.vibe}
             onChange={(e) => setNewCloset({...newCloset, vibe: e.target.value})} />
            <input className='border-2 p-2 rounded-xl'
            placeholder='Enter Image URL' 
            name='image'
            value={newCloset.image}
            onChange={(e) => setNewCloset({...newCloset, image: e.target.value})}/>
        </div>
        <div className='self-end flex gap-2'>
            <button className='bg-greyD text-white hover:opacity-80 cursor-pointer rounded-2xl text-sm p-2' onClick={handleUpdate}>Update</button>
            <button className='bg-greyD text-white hover:opacity-80 cursor-pointer rounded-2xl text-sm p-2' onClick={onClose}>Cancel</button>
        </div>
    </div>
  )
}

export default Update