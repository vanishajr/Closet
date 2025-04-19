import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useClothStore } from '../store/clothes';
import { OutfitCard } from '../components/OutfitCard';
import Update from '../components/Update';

const HomePage = () => {
  const {fetchClothes,clothes, vibes, filter, filteredClothes} = useClothStore();
  useEffect(()=>{
    fetchClothes("All");
  },[fetchClothes]);

  const[showUpdate, setShowUpdate] = useState(false);
  const[selectedCloth,setSelectedCloth] = useState(null);

  const handleUpdate = (cloth) => {
    setSelectedCloth(cloth);
    setShowUpdate(true);
  };

  const closeUpdate = () => {
    setShowUpdate(false);
    setSelectedCloth(null);
  }
  
  return (
    <div className='min-h-screen p=12'>
      <div className='font-black text-3xl text-center'>Current Outfits</div>
      {clothes.length!= 0 && <select className='bg-greyD mx-10 my-5 p-2 text-white rounded-xl'
      value={filter}
      onChange={(e) => fetchClothes(e.target.value)}>
        <option value="All">All</option>
        {vibes.map((vibe)=> (
          <option key={vibe} value={vibe}>{vibe}</option>
        ))}
      </select>}
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 p-20 pb-0 pt-5'>
        {filteredClothes.map((cloth) => (
          <OutfitCard key={cloth._id} cloth={cloth} onUpdate={handleUpdate}/>
        ))}
      </div>

      {clothes.length === 0 && (
        <div className='text-center font-medium'>
        <p>No products found!</p>
        <Link className='underline text-green hover:opacity-50' to={"/create"}> 
          Go to Create Product
        </Link>
      </div> 
      )}
      
      {showUpdate && (
        <div className="fixed top-1/3 lg:left-[45%] left-[30%] flex rounded-2xl border-2 border-l-6 border-b-6 items-center justify-center p-5 bg-white">
          <Update cloth={selectedCloth} onClose={closeUpdate} />
        </div>
      )}

    </div>    
  )
}

export default HomePage;