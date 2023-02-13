const Category = require("../models/category.model")

class CategoryController{
    addCategory(req, res, next){
        const data = new Category(req.body);
        data.save().then((data) => {
            res.json({
                msg: "category added succesfully",
                status: true,
            });
        })
        .catch((err) => {
            next({err: "something went wrong"});
        });

    }
    getallCategory(){}

}

module.exports = CategoryController;

