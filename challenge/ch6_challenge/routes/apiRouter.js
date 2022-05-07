const controllers = require("../app/controllers");

const express = require("express");
const router = express.Router();

router.get("/v1/cars", controllers.api.v1.carController.list);
router.post("/v1/cars/create", controllers.api.v1.carController.create);

router.post("/v1/users/create", controllers.api.v1.userController.create);

router.post(
  "/v1/admins/create",
  controllers.api.v1.adminController.authorize,
  controllers.api.v1.adminController.create
);
router.post("/v1/admins/login", controllers.api.v1.adminController.login);

module.exports = router;
