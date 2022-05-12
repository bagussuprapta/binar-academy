const carService = require("../../../services");

module.exports = {
  async getAllCar(req, res) {
    try {
      const cars = await carService.api.v1.carService.getAllCar();
      res.status(200).json({
        cars,
      });
    } catch (err) {
      res.status(err.status || 400).json({
        err: err.status,
        message: err.message,
      });
    }
  },

  async postCreate(req, res) {
    try {
      const car = await carService.api.v1.carService.create(
        req.user,
        req.body
      );
      res.status(201).json({ message: `${car.plate} created` });
    } catch (err) {
      res.status(err.status || 400).json({ message: err.message });
    }
  },

  async postUpdate(req, res) {
    try {
      const car = await carService.api.v1.carService.update(
        req.user,
        req.body,
        req.params.plate
      );
      res.status(200).json({
        message: `${car.plate} updated`,
      });
    } catch (err) {
      res.status(err.status || 400).json({
        message: err.message,
      });
    }
  },

  async postDelete(req, res) {
    try {
      const car = await carService.api.v1.carService.delete(
        req.user,
        req.params.plate
      );
      res.status(200).json({
        message: `${car.plate} deleted by ${car.deletedBy}`,
      });
    } catch (err) {
      res.status(err.status || 400).json({
        message: err.message,
      });
    }
  },
};
