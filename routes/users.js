const router = require("express").Router();
const UserController = require("../controllers/user.controller");
const isAdmin = require("../middlewares/isAdmin");
const isLoggedIn = require("../middlewares/isLoggedin");

const userController = new UserController();

router.post("/register", userController.register);
router.get("/listrecord",userController.getUsers);
router.get("/listbyid/:id",isLoggedIn,userController.getUserById);;

router
  .route("/:id")
  .get(isLoggedIn, isAdmin, userController.getUserById)
  .put(isLoggedIn, userController.UpdateUserById)
  .delete(isLoggedIn,userController.deleteUserById);

module.exports = router;