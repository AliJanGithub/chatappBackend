const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true

    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    pic:{
        type:String,
        default:'https://avatar.iran.liara.run/public/boy'
    }
},
{timestamps:true}
)

const userModel=new mongoose.model("User",userSchema)
module.exports=userModel;