const controllers = require("../app/controllers");

const express = require("express");
const router = express.Router();

router.get("/", controllers.userController.index);
router.get("/register", controllers.authController.register);
router.post("/register", controllers.authController.create);

module.exports = router;
