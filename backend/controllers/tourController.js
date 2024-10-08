import Tour from '../models/Tour.js'

// new tour 
export const createTour=async(req,res)=>{
    const newTour= new Tour(req.body)
    try{
        const savedTour= await newTour.save()
        res.status(200).json({success:true,message:"Successfully Created",data:savedTour})
    }catch(err){
        // const savedTour= await newTour.save()
        res.status(500).json({success:false,message:"Failed to create,Try again ",data:savedTour})
    } 
};
// update
export const updateTour=async(req,res)=>{
    const id=req.params.id
    try {
        const updatedTour=await Tour.findByIdAndUpdate(id,{
            $set : req.body
        },{new:true})
        res.status(200).json({success:true,message:"Successfully Updated" , data : updatedTour})
    }catch(err){
        res.status(500).json({success:false,message:"Failed to Update",})
    }
};
// delete 
export const deleteTour=async(req,res)=>{
    const id=req.params.id
    try {
        await Tour.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"Successfully Deleted" })
    }catch(err){
        res.status(500).json({success:false,message:"Failed to Delete",})
    }
};
// getsingletour
export const getSingleTour=async(req,res)=>{
    const id=req.params.id
    try {
        const tour=await Tour.findById(id).populate('reviews');
        res.status(200).json({success:true,message:"Successfully Fetched",data:tour })
    }catch(err){
        res.status(404).json({success:false,message:"Not Found",})
     }
};
// getalltour
export const getAllTour=async(req,res)=>{
    // pagination
    const page =parseInt(req.query.page);
 
    try {
        const tours=await Tour.find({}).populate('reviews').skip(page*8).limit(8);
        res.status(200).json({success:true,count:tours.length,message:"Successfully Fetched",data:tours })
    }catch(err){
        res.status(404).json({success:false,message:"Not Found",})
    }
};
// search option
export const getTourBySearch=async(req,res)=>{
    // 'i'-case sensitive
    const city =new RegExp(req.query.city,'i')
    const distance=parseInt(req.query.distance)
    const maxGroupSize=parseInt(req.query.maxGroupSize)
    try{
        // gte-greaterthan or equal to
        const tours=await Tour.find({city,distance:{$gte:distance},maxGroupSize:{$gte:maxGroupSize}}).populate('reviews')
        res.status(200).json({success:true,message:"Successfully Fetched",data:tours })
    }catch(err){
        res.status(404).json({success:false,message:"Not Found",})
    }
};

// get featured tours
export const getFeaturedTours=async(req,res)=>{
    // pagination
    const page =parseInt(req.query.page);
 
    try {
        const tours=await Tour.find({featured:true}).limit(8);
        res.status(200).json({success:true,message:"Successfully Fetched",data:tours })
    }catch(err){
        res.status(404).json({success:false,message:"Not Found",})
    }
};

// get tourcount

export const getTourCount=async(req,res)=>{
    try{
        const tourCount=await Tour.estimatedDocumentCount()
        res.status(200).json({success:true,data:tourCount})
    }catch(err){
        res.status(500).json({success:false,message:'failed to fetch '})
    }
}