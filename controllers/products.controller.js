const Product = require("../models/products.model");
const Category = require("../models/products.model")

class Productcontroller{
    addProduct(req, res, next){
        const data = new Product(req.body);
        data.save().then((data) => {
            res.json({
                msg: "Product added succesfully",
                status: true,
            });
        })
        .catch((err) => {
            next({err: "something went wrong"});
        });

    }
    getallProducts(){}

}

module.exports = Productcontroller