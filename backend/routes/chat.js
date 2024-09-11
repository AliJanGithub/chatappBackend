const express=require("express");
// const router = require("./userroutes");
const {sendmessage,getmessage}=require("../controllers/messagecontrol");
// const getmessage=require("../controllers/messagecontroller");
const userauth = require("../middlewares/usermiddleware");
const chatrouter=express.Router()
chatrouter.post("/send/:id",userauth,sendmessage)
chatrouter.get("/getmessages/:id",userauth,getmessage)



module.exports = chatrouter