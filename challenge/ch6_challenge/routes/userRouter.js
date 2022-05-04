const controllers = require("../app/controllers");

const express = require("express");
const router = express.Router();

router.get("/", controllers.user.userController.index);

module.exports = router;
