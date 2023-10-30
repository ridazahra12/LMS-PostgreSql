var router = require("express").Router();
const userController = require("../controller/users/userController");
const authController = require("../controller/common/authenticationController");
router.post("/register", userController.registerUser);
router.post("/login", authController.loginUser);
module.exports = router;
