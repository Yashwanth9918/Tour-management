import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
// registration 
export const register= async(req,res)=>{
    try{

        const salt=bcrypt.genSaltSync(10)
        const hash=bcrypt.hashSync(req.body.password,salt)
        const newUser=new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
            photo:req.body.photo
        });
        await newUser.save()
        res.status(200).json({success:true,message:'Successfully Registered'})
    }catch(err){
        res.status(500).json({success:false,message:'Failed to Register, Try again'})
    }
};
// login
export const login=async(req,res)=>{
    const email=req.body.email
    try{
        const user=await User.findOne({email})

        // if user doesnt exist yet
        if(!user){
            return res.status(404).json({success:false,message:"User Not Found"})
        }
        // if exist check password
        const checkCorrectPassword= await bcrypt.compare(req.body.password,user.password)
        // if password doesnt match
        if(!checkCorrectPassword){
            return res.status(401).json({success:false,message:"Incorrect credentials"});
        }
        const {password,role,...rest}=user._doc;
        // creating jwt-token
        const token =jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET_KEY,{expiresIn:"15d"});
        // set the token in browser cookies and response to client
        res.cookie('accessToken',token,{
            httpOnly:true,
            expires:token.expiresIn
        }).status(200).json({token,data:{...rest},role,});
    }catch(err){
        console.log(err);
        return res.status(500).json({success:false,message:"Failed to login"});
    }
};