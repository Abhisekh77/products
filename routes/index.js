var express = require('express');
var router = express.Router();

const UserRoute = require("./users");
const AuthRoute = require("./auth");
const CategoryRoute = require("./category");
const productRoute = require("./products")
// Get home page

router.use("/user", UserRoute);
//get login page
router.use("/auth", AuthRoute);
router.use("/product",productRoute);
router.use("/category",CategoryRoute);


module.exports = router;
