const { Cars } = require("../../../models");

module.exports = {
  create(req, res) {
    if (req.user?.type !== "Super Admin" && req.user?.type !== "Admin") {
      res.status(403).json({
        status: "Forbidden",
        message: "Only Super Admin and Admin can update car",
      });
      return;
    }
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

  async update(req, res) {
    if (req.user?.type !== "Super Admin" && req.user?.type !== "Admin") {
      res.status(403).json({
        status: "Forbidden",
        message: "Only Super Admin and Admin can update car",
      });
      return;
    }
    const car = await Cars.findOne({ where: { plate: req.body.plate } });
    Cars.update(req.body, { where: { plate: car.plate } });
    res.status(202).json({ status: "Accepted" });
  },

  async delete(req, res) {
    if (req.user?.type !== "Super Admin" && req.user?.type !== "Admin") {
      res.status(403).json({
        status: "Forbidden",
        message: "Only Super Admin and Admin can update car",
      });
      return;
    }

    await Cars.destroy({ where: { plate: req.params.plate } });
    res.status(200).json({ status: "OK" });
  },
};
