const mongoose=require("mongoose")
const messageSchema=new mongoose.Schema({
    senderId:{
       type :mongoose.Schema.Types.ObjectId,
        res:"User"
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
       
    },
    message:{
        type:String,
        required:true
    }

   
},{timestamps:true}
)

const messageModel=mongoose.model("Messages",messageSchema)
module.exports = messageModel