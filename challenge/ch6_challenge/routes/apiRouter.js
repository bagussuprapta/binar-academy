const controllers = require("../app/controllers");

const express = require("express");
const router = express.Router();

// admin router
router.post(
  "/v1/admins/register/superadmin",
  controllers.api.v1.adminController.postRegisterSuperAdmin
);
router.post("/v1/admins/login", controllers.api.v1.adminController.postLogin);
router.post(
  "/v1/admins/register/admin",
  controllers.api.v1.authController.authorizeAdmin,
  controllers.api.v1.adminController.postRegisterAdmin
);
router.post(
  "/v1/admins/update/:username",
  controllers.api.v1.adminController.postUpdate
);
router.get(
  "/v1/admins/current-admin",
  controllers.api.v1.authController.authorizeAdmin,
  controllers.api.v1.adminController.currentAdmin
);

// user route
router.post(
  "/v1/users/register",
  controllers.api.v1.userController.postRegister
);
router.post("/v1/users/login", controllers.api.v1.userController.postLogin);

// car route
router.get("/v1/cars", controllers.api.v1.carController.getAllCar);
router.post(
  "/v1/cars/create",
  controllers.api.v1.authController.authorizeAdmin,
  controllers.api.v1.carController.postCreate
);
router.put(
  "/v1/cars/update/:plate",
  controllers.api.v1.authController.authorizeAdmin,
  controllers.api.v1.carController.postUpdate
);
router.delete(
  "/v1/cars/delete/:plate",
  controllers.api.v1.authController.authorizeAdmin,
  controllers.api.v1.carController.postDelete
);

module.exports = router;
