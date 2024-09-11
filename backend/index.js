const express=require("express")
const router = require("./routes/userroute")
const  connecttodb  = require("./utils/connectodb")
const userrouter=require("./routes/getallusers")
const chatrouter=require("./routes/chat")
const cores=require("cors")
const env=require("dotenv").config()
const PORT=process.env.PORT
const Server=express()
connecttodb();
Server.use(express.json()) 
Server.use(cores())

Server.use("/api",router)
Server.use("/getallusers",userrouter) 
Server.use("/",chatrouter)
Server.listen(PORT || 4999,()=>{
    console.log("Server is running on port "+ PORT)
}) 