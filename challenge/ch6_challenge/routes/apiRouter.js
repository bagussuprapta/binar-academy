const controllers = require("../app/controllers");

const express = require("express");
const router = express.Router();

router.post("/v1/cars", controllers.api.v1.carController.create);
router.get("/v1/cars", controllers.api.v1.carController.list);

router.post("/v1/users", controllers.api.v1.userController.create);

router.post("/v1/admins", controllers.api.v1.adminController.create);
router.post("/v1/admins/login", controllers.api.v1.adminController.login);

module.exports = router;
