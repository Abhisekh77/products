const mongoose = require("mongoose")

const AddressSchema = new mongoose.Schema({
    ward: {
        type: Number,
    },
    district: {
        type: String,
    },
});

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String, //Number,objectId,null,data
        required: true
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type:String,
        required: true,
        unique: true,
    },
    userName: {
        type:String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    address:{
        tempAddress: AddressSchema,
        permAddress: AddressSchema,
    },
    role:{
        type:String,
        enum: ["admin", "seller", "customer"],
        default: "customer",
    },

},
  {
    timestamps:true,
  }
);

const user = mongoose.model("User", UserSchema)
module.exports = user;