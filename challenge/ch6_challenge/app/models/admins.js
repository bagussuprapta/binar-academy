"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Admins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Admins.init(
    {
      username: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      fullname: DataTypes.STRING,
      password: DataTypes.STRING,
      type: DataTypes.ENUM({
        values: ["Super Admin", "Admin"],
      }),
    },
    {
      sequelize,
      modelName: "Admins",
    }
  );
  return Admins;
};
