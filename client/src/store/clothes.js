import { create } from 'zustand'

export const useClothStore = create((set) => ({
    clothes: [],
    filteredClothes: [],
    filter:"All",
    vibes:[],
    setClothes: (clothes) => set({clothes, filteredClothes: clothes}),
    
    createClothes: async(newCloth) => {
        if(!newCloth.name || !newCloth.image || !newCloth.vibe) {
            return {success:false, message:"Please fill all fields"}
        }
        const res = await fetch("/api/closets", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCloth),
    });
    const data = await res.json();
    set((state) => ({clothes: [...state.clothes,data.data]}));
    return {success:true, message:"Product created"};
    },
    fetchClothes: async (vibe="All") => {
        const res = await fetch("/api/closets");
        const data = await res.json();
        const allClothes = data.data;

        const uniqueVibes = [...new Set(allClothes.map((cloth) => cloth.vibe))];

        const filtered = vibe === "All" ? allClothes : allClothes.filter((cloth) => cloth.vibe === vibe);
        set({ clothes: allClothes, filteredClothes: filtered, filter: vibe, vibes: uniqueVibes });
    },
    deleteClothes: async(pid)=>{
        const res= await fetch (`/api/closets/${pid}`, {
            method:"DELETE",
        });
        const data = await res.json();
        if(!data.success) return { success:false, message:data.message};
        set(state => ({ clothes: state.clothes.filter(cloth => cloth._id !== pid)}));
        return { success:true, message:data.message};
    },
    updateClothes: async(pid, updatedCloth) => {
        const res = await fetch(`api/closets/${pid}`, {
            method:"PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedCloth),
        });
        const data = await res.json();
        set((state) => ({clothes: state.clothes.map((cloth) =>
            cloth._id === pid ? data.data : cloth 
        )}));
        return {success:true, message:"Product updated"};
    }
}))
