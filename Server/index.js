import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import hotelsRoute from "./routes/hotels.js"
// import roomsRoute from "./routes/rooms.js"
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import cookieParser from "cookie-parser";
const app=express();
const router=express.Router()

dotenv.config()

const connect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongoDb!")
    } catch (error) {
        handleError(error);
    }
}
mongoose.connection.on("disconnected",()=>{
    console.log("mongoose disconnected")
})
mongoose.connection.on("connected",()=>{
    console.log("connected")
})

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());





//middlewares

app.use(express.json())
app.use("/auth",authRoute);
app.use("/hotels",hotelsRoute);
app.use("/users",userRoute);
// app.use("/rooms",roomsRoute);
app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status : errorStatus,
        message : errorMessage,
        stack : err.stack
    })
})


app.listen(8800,()=>{
    connect();
    console.log("connected to backened")
})