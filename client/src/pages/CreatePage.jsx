import React, { useState } from 'react'
import { useClothStore } from '../store/clothes';
import Popup from '../components/popup.jsx';

export const CreatePage = () => {
  const [newCloset, setNewCloset] = useState({
    name:"", vibe:"", image:"",
  });

  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const {createClothes} = useClothStore()
  const handleAdd = async () => {
    const {success, message} = await createClothes(newCloset)
    if(success) setPopupMessage("Outfit added");
    else setPopupMessage("Outfit not added!");
    setShowPopup(true);
    setNewCloset({name:"", vibe:"", image:""});
  }

  const handleClosePopup = () => {
    setShowPopup(false);
  }

  return (
    <div className='flex flex-col gap-6 h-1/2 items-center'>
     <h2 className='font-black text-4xl'>Add Clothes</h2>
      <div className='bg-beigeD w-1/2 p-5 rounded-xl flex flex-col gap-2'> 
        <div>Name</div>
        <input className='p-2 mb-2 w-full border rounded-xl border-l-3 border-b-3 outline-none' 
          placeholder='Enter Name' 
          name='name'
          value={newCloset.name}
          onChange={(e) => setNewCloset({...newCloset, name: e.target.value })}
        />
        <div>Vibe</div>
        <input className='p-2 mb-2 w-full border rounded-xl border-l-3 border-b-3 outline-none' 
          placeholder='Enter Vibe' 
          name='vibe'
          value={newCloset.vibe}
          onChange={(e) => setNewCloset({...newCloset, vibe: e.target.value })}
        />
        <div>Image</div>
        <input className='p-2 mb-2 w-full border rounded-xl border-l-3 border-b-3 outline-none'
        placeholder='Enter Image URL'
        name='image'
        value={newCloset.image}
        onChange={(e) => setNewCloset({ ...newCloset, image: e.target.value })}
        />
        <div className='w-full flex justify-between gap-5 mt-4'>
          <button className='bg-greyD cursor-pointer hover:opacity-80 text-white rounded-2xl h-9 w-full' onClick={handleAdd}>Cancel</button>
          <button className='bg-greyD cursor-pointer hover:opacity-80 text-white rounded-2xl h-9 w-full' onClick={handleAdd}>Add</button>
        </div>
      </div>
      {showPopup && <Popup message={popupMessage} onClose={handleClosePopup} />}
    </div>
  )
}

export default CreatePage;
