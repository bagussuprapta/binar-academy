const { Users } = require("../../../models");

module.exports = {
  async findByUsername(username){
    return await Users.findByPk(username);
  },

  async save(saveArgs){
    return await Users.create(saveArgs);
  }
}