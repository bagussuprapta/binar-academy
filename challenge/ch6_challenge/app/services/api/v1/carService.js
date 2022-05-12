const carRepository = require("../../../repositories");

module.exports = {
  async getAllCar() {
    try {
      return await carRepository.api.v1.carRepository.getAllCar();
    } catch (err) {
      throw err;
    }
  },

  async create(admin, reqBody) {
    try {
      if (!(admin?.role !== "superadmin" || admin?.role !== "admin"))
        throw { status: 401, message: "please login as admin or superadmin" };
      if (await carRepository.api.v1.carRepository.findByPlate(reqBody.plate))
        throw { status: 409, message: `${reqBody.plate} already exsist` };
      return await carRepository.api.v1.carRepository.save(reqBody);
    } catch (err) {
      throw err;
    }
  },

  async update(admin, reqBody, plate) {
    try {
      if (!(admin.role !== "superadmin" || admin.role !== "admin"))
        throw { status: 401, message: "please login as admin or superadmin" };
      if (!(await carRepository.api.v1.carRepository.findByPlate(plate)))
        throw { status: 404, message: "please input correct plate" };
      await carRepository.api.v1.carRepository.update(reqBody, plate);
      return await carRepository.api.v1.carRepository.findByPlate(plate);
    } catch (err) {
      throw err;
    }
  },

  async delete(admin, plate) {
    try {
      if (!(admin.role !== "superadmin" || admin.role !== "admin"))
        throw { status: 401, message: "please login as admin or superadmin" };
      if (!(await carRepository.api.v1.carRepository.findByPlate(plate)))
        throw { status: 404, message: "please input correct plate" };
      const car = await carRepository.api.v1.carRepository.findByPlate(plate);
      await carRepository.api.v1.carRepository.delete(plate);
      return car;
    } catch (err) {
      throw err;
    }
  },
};
