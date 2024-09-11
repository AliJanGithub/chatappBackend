const jwt=require("jsonwebtoken");
const Conservation = require("../models/conservation");
const messageModel = require("../models/messagemodel");
const sendmessage=async(req,res)=>{

try {
    const {id:receiverId}=req.params;
const {message}=req.body;
const senderId=req.user._id;
let conservation=await Conservation.findOne({
    participants:{$all:[senderId,receiverId]}
})
if(!conservation){
  conservation= await Conservation.create(
    {
        participants:[senderId,receiverId],
        
    }
   )
}

const newMessage=new messageModel({
    senderId,
    receiverId,
    message
})

if(newMessage){
    conservation.messages.push(newMessage)
}

await Promise.all([conservation.save(),newMessage.save()])
res.json(newMessage)
} catch (error) {
   console.log(error); 
}


 
}
const getmessage=async(req,res)=>{
    try {
        const senderid=req.user._id;
const {id:chattouser}=req.params;
const conservation=await Conservation.findOne({
    participants:{$all:[chattouser,senderid]},
}).populate("messages")
if(!conservation){
    return res.json([])
}
res.status(200).json(conservation.messages)
    } catch (error) {
        console.log(error);
    }



}

module.exports={sendmessage,getmessage};