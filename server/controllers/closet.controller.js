import mongoose from "mongoose";
import Closet from "../models/closet.model.js";

export const getClosets = async (req,res) => {
    try{
        const closets = await Closet.find({});
        res.status(200).json({success: true, data: closets});
    } catch(error) {
        console.log("error in fetching products");
        res.status(404).json({success:false, message:"Error in fecthin closets"});
    }
}

export const createCloset = async (req,res) => {
    const closet = req.body; //allows the user to send data

    if(!closet.name || !closet.vibe || !closet.image) {
        return res.status(400).json({ success:false, message: "Please provide all fields" });
    }

    const newCloset = new Closet(closet);

    try {
        await newCloset.save();
        res.status(201).json({ success:true, data: newCloset});
    } catch (error) {
        console.error(`Error in create closet:`, error.message);
        res.status(500).json({success:false, message:"Server Error"});
    }
}

export const updateCloset = async (req,res) => {
    const {id} = req.params;

    const closet = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"Invalid object id"});
    }

    try {
        const updatedCloset = await Closet.findByIdAndUpdate(id, closet, {new:true});
        res.status(200).json({success:true, data: updatedCloset})
    } catch (error) {
        console.log("error updating closet");
        res.status(500).json({success:false, message:"Update error"});
    }
}

export const deleteCloset = async (req,res) => {
    const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"Invalid object id"});
    }

    try {
        await Closet.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted"});
    } catch (error) {
        res.status(500).json({ success: false, message: "Product not found"});
    }
}