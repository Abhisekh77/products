const router = require("express").Router();
const newuser = require("../models/users_model");
const generateToken = require("../utils/token");

const bcrypt= require("bcrypt");
router.post("/login",(req,res,next)=>{
    console.log("i am here");
        newuser
        .findOne({
            email: req.body.email})
            .then((newuser)=>{
                bcrypt.compare(req.body.password,newuser.password,async(err,result)=>{
                    if(result){
                        res.json({
                            msg:"password valid",
                            newuser,
                            token : await generateToken(newuser),

                        });
                    }
                    else{
                        res.json({
                            msg:"invalid "
                        })
                    }
                });

            })
            .catch((err)=>{
                res.json({
                    msg:"invalid credentials",
                    err
                });
            });
            })
module.exports=router;