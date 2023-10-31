import jwt from "jsonwebtoken"
import { createError } from "./error.js"

export const VerifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) return next(createError(401, " you are not authenticated!"))


    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) return (createError(403, "Token is not valid!"))
        req.user = user;
        next();

    });
};

export const VerifyAdmin = (req,res,next)=>{
    VerifyToken(req,res,next,()=>{
        if(req.user.id==req.params.id || req.user.isAdmin){
            next();
        }else{
            return next(createError(403,"you are not authorized!"))
        }
    })
    
}