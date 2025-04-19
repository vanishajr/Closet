import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { connectDB } from './config/db.js';
import closetRoutes from "./routes/closet.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); //middlelayer - allows to accept data in json req.body

app.use("/api/closets", closetRoutes);

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client", "dist")));

    app.get(/.*/, (req,res) =>{
        res.sendFile(path.resolve(__dirname,"client","dist","index.html"))
    })
}

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:"+PORT);
});

//q4mVE7SD5xjYbGHK