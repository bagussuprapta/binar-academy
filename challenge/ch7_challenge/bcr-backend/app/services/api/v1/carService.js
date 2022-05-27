const carRepository = require("../../../repositories");

module.exports = {
  async getAllCar() {
    try {
      return await carRepository.api.v1.carRepository.getAllCar();
    } catch (err) {
      throw err;
    }
  },

  async getAvailableCar(date){
    try{
      const cars = await carRepository.api.v1.carRepository.getAllCar();
      console.log(cars);
      return await carRepository.api.v1.carRepository.availableDate(date, cars);
    }catch(err){
      throw err;
    }
  },

  async create(user, reqBody) {
    try {
      if (
        user === undefined ||
        user?.role !== "superadmin" ||
        user?.role === "admin"
      )
        throw { status: 401, message: "please login as admin or superadmin" };
      if (await carRepository.api.v1.carRepository.findByPlate(reqBody.plate))
        throw { status: 409, message: `${reqBody.plate} already exsist` };
      reqBody.createdBy = user.username;
      reqBody.updatedBy = user.username;
      return await carRepository.api.v1.carRepository.save(reqBody);
    } catch (err) {
      throw err;
    }
  },

  async update(user, reqBody, plate) {
    try {
      if (
        user === undefined ||
        user?.role !== "superadmin" ||
        user?.role === "admin"
      )
        throw { status: 401, message: "please login as admin or superadmin" };
      if (!(await carRepository.api.v1.carRepository.findByPlate(plate)))
        throw { status: 404, message: "please input correct plate" };
      reqBody.lastUpdatedBy = user.username;
      await carRepository.api.v1.carRepository.update(reqBody, plate);
      return await carRepository.api.v1.carRepository.findByPlate(plate);
    } catch (err) {
      throw err;
    }
  },

  async delete(user, plate) {
    try {
      if (
        user === undefined ||
        user?.role !== "superadmin" ||
        user?.role === "admin"
      )
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
