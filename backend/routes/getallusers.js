const express=require("express");
const getAllUsers = require("../controllers/getallusers");
const authMiddleware = require("../middlewares/usermiddleware");
const userrouter=express.Router();

userrouter.get("/",authMiddleware,getAllUsers)
module.exports=userrouter