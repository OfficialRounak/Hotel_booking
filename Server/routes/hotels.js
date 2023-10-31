import express from "express";
import {createHotels, deleteHotels, getHotels, updateHotels} from "../controllers/hotels.js";
import { VerifyAdmin, VerifyToken } from "../utils/VerifyToken.js";


const router = express.Router();


//create
router.post("/",VerifyAdmin, createHotels);

//update
router.put("/:id",VerifyAdmin, updateHotels)

//delete
router.delete("/:id",VerifyAdmin,deleteHotels)

//get a particular hotel
router.get("/:id",VerifyToken, getHotels)

export default router;