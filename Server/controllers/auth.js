import User from "../models/users.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = async (req, res, next) => {
    try {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);

        const newUsers = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash,
            isAdmin: req.body.isAdmin,
        });

        const response = await newUsers.save();

        res.status(200).send("acc created")


    } catch (err) {
        next(err)
    }
}
export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ name: req.body.name });
        if (!user) {
            return next(createError(404, "user not found!"))
        }

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isPasswordCorrect) return next(createError(400, "wrong password or username"))

        const token =jwt.sign({id: user._id , isAdmin : user.isAdmin}, process.env.JWT)

        const {password , isAdmin , ...otherDetails} = user._doc

        res.cookie("access_token", token,{httpOnly:true} ).status(200).json({...otherDetails})

    } catch (err) {
        next(err)
    }
}

