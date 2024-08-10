import Booking from "../models/Booking.js"


// new booking
export const createBooking=async(req,res)=>{
    const newBooking= new Booking(req.body)
    try{
        const savedBooking=await newBooking.save()
        res.status(200).json({success:true,message:"Your tour is booked",data:savedBooking})
    }catch(err){
        res.status(500).json({success:false,message:"Tour booking failed,Server error"})
    }
}
// get booking
export const getBooking=async(req,res)=>{
    const id=req.params.id
    try{
        const book= await Booking.findById(id)
        res.status(200).json({success:true,message:"Success",data:book})
    }catch(err){
        res.status(404).json({success:false,message:"Tour not found"})
    }
}

// get all booking
export const getAllBooking=async(req,res)=>{
    try{
        const bookings= await Booking.find()
        res.status(200).json({success:true,message:"Success",data:bookings})
    }catch(err){
        res.status(500).json({success:false,message:"Internal Error"})
    }
}