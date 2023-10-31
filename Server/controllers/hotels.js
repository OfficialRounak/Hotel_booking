import Hotels from "../models/hotels.js"

export const createHotels=async(req,res,next)=>{
    const newHotel = new Hotels(req.body);
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel)

    } catch (err) {
        next(err)
    }
}

export const updateHotels=async(req,res,next)=>{
    try {
        const updatedHotel = await Hotels.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedHotel);
    } catch (err) {
        next(err);
    }
}

export const deleteHotels=async(req,res,next)=>{
    try{
        await Hotels.findByIdAndDelete(req.params.id)
        res.status(200).json("hotel deleted")

    }catch(err){
        next(err)
    }
}

export const getHotels=async(req,res,next)=>{
    try{
        const hotel = await Hotels.findById(req.params.id);
        res.status(200).json(hotel)

    }catch(err){
        next(err)
    }
}

