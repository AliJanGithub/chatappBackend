const express=require("express")
const User=require("../models/usemodel")


const getAllUsers=async(req,res)=>{
       const loggedinuser=req.user._id;
       const user=await User.find({_id:{$ne:loggedinuser}}).select("-password")
       if(!user) return res.json({msg:"users doesnot exist"})
        res.json(user)

}
module.exports=getAllUsers;