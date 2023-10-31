import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/users.js";
import { VerifyAdmin, VerifyToken} from "../utils/VerifyToken.js";



const router = express.Router();

// router.get("/checkauthentication", VerifyUser , (req,res,next)=>{
//     res.send("hello user, you are logged in!")
// })


//update
router.put("/:id",VerifyToken, updateUser)

//delete
router.delete("/:id",VerifyToken,deleteUser)

//get a particular user
router.get("/:id",VerifyToken ,getUser)

//get all users

router.get("/",VerifyAdmin, getUsers)

export default router;