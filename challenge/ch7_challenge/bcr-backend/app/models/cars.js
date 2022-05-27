"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cars.init(
    {
      plate: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      manufacture: DataTypes.STRING,
      model: DataTypes.STRING,
      image: DataTypes.STRING,
      rentPerDay: DataTypes.INTEGER,
      capacity: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      transmision: DataTypes.STRING,
      available: DataTypes.BOOLEAN,
      type: DataTypes.STRING,
      year: DataTypes.STRING,
      options: DataTypes.STRING,
      specs: DataTypes.STRING,
      createdBy: DataTypes.STRING,
      deletedBy: DataTypes.STRING,
      updatedBy: DataTypes.STRING,
      availableAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Cars",
    }
  );
  return Cars;
};
