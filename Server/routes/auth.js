import express from "express";
import { login, register } from "../controllers/auth.js";
const router=express.Router()

//creating user
router.post("/register",register);

//login user
router.post("/login",login)




export default router;