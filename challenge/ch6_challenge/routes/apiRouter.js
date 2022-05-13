const controllers = require("../app/controllers");
const swaggerUi = require("swagger-ui-express");
const express = require("express");

const router = express.Router();

const swaggerDocument = require("../config/openapi.json");

// api documentation
router.use("/v1/docs", swaggerUi.serve)
router.get("/v1/docs", swaggerUi.setup(swaggerDocument));

// user router
router.post(
  "/v1/users/register",
  controllers.api.v1.authController.authorize,
  controllers.api.v1.userController.postRegister
);
router.post("/v1/users/login", controllers.api.v1.userController.postLogin);
router.get(
  "/v1/users/current",
  controllers.api.v1.authController.authorize,
  controllers.api.v1.userController.currentUser
);

// car route
router.get("/v1/cars", controllers.api.v1.carController.getAllCar);
router.post(
  "/v1/cars/create",
  controllers.api.v1.authController.authorize,
  controllers.api.v1.carController.postCreate
);
router.put(
  "/v1/cars/update/:plate",
  controllers.api.v1.authController.authorize,
  controllers.api.v1.carController.postUpdate
);
router.delete(
  "/v1/cars/delete/:plate",
  controllers.api.v1.authController.authorize,
  controllers.api.v1.carController.postDelete
);

module.exports = router;
