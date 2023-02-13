const mongoose = require("mongoose");
const dbURL = "mongodb://0.0.0.0:27017/ecommerce";

mongoose.connect(dbURL,(err) => {
    if(err){
        console.log("Error in database Connection");
    }
    else{
        console.log("Database Connected Succesfully");
    }
});