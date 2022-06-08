const { Cars, sequelize } = require("../../../models");

module.exports = {
  async findByPlate(plate) {
    return await Cars.findByPk(plate);
  },

  async availableDate(date, cars) {
    console.log(date);
    return await Cars.findAll({
      where: sequelize.where(sequelize.fn('date', sequelize.col('availableAt')), '>', date)
    });
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
