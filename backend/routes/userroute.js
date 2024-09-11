const express=require("express");
const { loginfunc, signupfunc } = require("../controllers/usercont");
const authMiddleware = require("../middlewares/usermiddleware");
const router=express.Router();

router.post("/login",loginfunc);
router.post("/signup",signupfunc);
router.get("/info",authMiddleware,async(req,res)=>{
    const user = req.user;

    
    res.status(200).json({
      user: {
        id: user._id,
        name: user.name, 
        pic: user.pic
      },})
});


module.exports=router 