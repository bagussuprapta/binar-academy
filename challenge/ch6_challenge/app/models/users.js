"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init(
    {
      username: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      fullname: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.ENUM({
        values: ["member", "admin", "superadmin"],
      }),
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
