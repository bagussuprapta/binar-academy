const { Cars } = require("../../../models");

module.exports = {
  create(req, res) {
    Cars.create(req.body)
      .then((car) => {
        res.status(201).json({
          status: "Created",
          data: `${car.plate} Saved`,
        });
      })
      .catch((err) => {
        res.status(422).json({
          status: "Unprocessable Entity",
          message: err.message,
        });
      });
  },

  async list(req, res) {
    const car = await Cars.findAll();
    res.status(201).json({
      data: car,
    });
  },
};
