const userModel = require("../models/usemodel");
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken")
const loginfunc=async(req,res)=>{
    const {email,password}=req.body;

if(!email  || !password) return res.status(404).json({"missing fields":"plz fill all the fields"})
    try {
        const existedUser= await userModel.findOne({email})
        if (!existedUser) {
           return res.status(400).json({"password mismatch":"password or email is invalid"})
   
        }
       if (existedUser.password!=password) {
           return res.status(400).json({"password mismatch":"password or email is invalid"})
       }
       const userid=existedUser._id;
       const token=await jwt.sign({userid},"itssecret")
       res.status(200).json({"token":token,images:existedUser.pic})
      
    } catch (error) {
        console.log(error)
    }
  
         

}
const signupfunc=async(req,res)=>{
const {email,name,password}=req.body;
if(!email || !name || !password) return res.status(404).json({"missing fields":"plz fill all the fields"})
    try {
        const existedUser= await userModel.findOne({email})
        if(existedUser)return res.status(400).json({"invalid email":"A user with this email already exists"})
         const user=new userModel({
     email,name,password,pic:`https://avatar.iran.liara.run/public/boy`
     })
              await user.save();
              res.status(200).json({"success":"User created successfully",email:user.email})
    } catch (error) {
        console.log(error)
    }
  
        
        
  
}


module.exports={signupfunc,loginfunc}