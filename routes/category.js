const router = require("express").Router();
const CategoryController = require("../controllers/category.controller");

const Category_Controller = new CategoryController();

router
 .route("/")
 .get(Category_Controller.getallCategory)
 .post(Category_Controller.addCategory);
 
module.exports = router;