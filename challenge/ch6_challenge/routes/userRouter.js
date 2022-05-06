const controllers = require("../app/controllers");

const express = require("express");
const router = express.Router();

router.get("/", controllers.userController.index);

module.exports = router;
