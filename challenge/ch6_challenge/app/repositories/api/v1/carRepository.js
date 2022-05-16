const { Cars } = require("../../../models");

module.exports = {
  async findByPlate(plate) {
    return await Cars.findByPk(plate);
  },

  async getAllCar() {
    return await Cars.findAll();
  },

  async save(carArgs) {
    return await Cars.create(carArgs);
  },

  async update(carArgs, plate) {
    await Cars.update(carArgs, { where: { plate: plate } });
  },

  async delete(plate) {
    await Cars.destroy({ where: { plate: plate } });
  },
};
