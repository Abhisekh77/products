const router = require("express").Router();

const upload = require("../utils/uploader")

const ProductController = require("../controllers/products.controller")

const productController = new ProductController();

router
 .route("/")
 .get(productController.getallProducts)
 .post(upload.array("images",5),productController.addProduct);

 module.export = router;