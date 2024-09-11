const mongoose=require('mongoose');
const conservationSchema=new mongoose.Schema({
    participants:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Users"
        }
    ],
    messages:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Messages",
            default:[]
        }
    ]
},{timestamps:true}
)
const Conservation=mongoose.model("Conservation",conservationSchema)
module.exports=Conservation