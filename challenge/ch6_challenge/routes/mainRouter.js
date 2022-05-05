const controllers = require("../app/controllers");

const express = require("express");
const router = express.Router();

router.get("/", controllers.mainController.index);

module.exports = router;
