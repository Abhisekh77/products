const bcrypt = require("bcrypt");
const User=require("../models/users_model");
salt = 10;

class UserController {
    register(req, res, next){
        const payload = req.body;
        const newuser = new User(payload);
        bcrypt.hash(payload.password, salt, (err, hash) => {
        if (err) {
          res.json({
            msg: "something went wrong",
            err,
          });
        }
        
        newuser.password = hash;
        newuser //.save means save gar and data patha if gayo vane saved successfull else error will be catched
         .save().then((data) => {
           res.json({
             msg: "user saved succesfully",
             newuser:data,
           });
         })
         .catch((err) => {
           res.json({
             msg: "Something went wrong",
             err
           });
         });
      });
  }

  getUsers(req, res, next) {
    console.log("output \n")
    User.find()
    .then((data) => {
     
      res.json({
        msg: "user successfully fetched data",
        user:data,
       //
      });
    })
    .catch((err) => {
      res.json({
        msg: "something went wrong",
        data: null,
      });
    });
  };
  getUserById(req, res, next){
    User.findById(req.params.id)
    .then((data) => {
      res.json({
        msg: "got data successfully",
        user:data,
      });
    })
    .catch((err) => {
      res.json({
        msg: "could not get",
        data: null,
      });
    });
  }

  UpdateUserById(req ,res, next){

  }
  deleteUserById(req, res, next){
    User.findByIdAndDelete(req.params.id)
    .then((success) => {
      res.json(success);
    })
    .catch((err) => {
      res.json({ Error:err });
    });
  }



}

module.exports = UserController;