const controllers = require("../app/controllers");

const express = require("express");
const router = express.Router();

router.post("/v1/cars", controllers.api.v1.carController.create);
router.get("/v1/cars", controllers.api.v1.carController.list);

router.post("/v1/users", controllers.api.v1.userController.create);

module.exports = router;
