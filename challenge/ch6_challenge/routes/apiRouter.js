const controllers = require("../app/controllers");

const express = require("express");
const router = express.Router();

router.post("/v1/cars", controllers.api.v1.carController.create);
router.get("/v1/cars", controllers.api.v1.carController.list);

module.exports = router;
