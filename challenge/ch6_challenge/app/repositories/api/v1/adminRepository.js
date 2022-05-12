const { Admins } = require("../../../models");

module.exports = {
  async findByUsername(username) {
    return await Admins.findByPk(username);
  },

  async getColumnName() {
    return Admins.rawAttributes;
  },

  async save(saveArgs) {
    return await Admins.create(saveArgs);
  },

  async update(updateArgs, username) {
    return Admins.update(updateArgs, { where: { username: username } });
  },
};
