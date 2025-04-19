import mongoose from "mongoose";

const closetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    vibe: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, { 
    timestamps: true //createdAt, updatedAt
});

const Closet = mongoose.model('Closet', closetSchema);

export default Closet;