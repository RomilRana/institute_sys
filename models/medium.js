"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Medium extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Medium.belongsTo(models.Institute, {
        foreignKey: "institute_id",
      });
      Medium.belongsTo(models.Board, {
        foreignKey: "board_id",
      });
      Medium.hasMany(models.Class_category, {
        foreignKey: "medium_id",
      });
      Medium.hasMany(models.standard, {
        foreignKey: "medium_id",
      });
    }
  }
  Medium.init(
    {
      board_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      institute_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Medium",
    }
  );
  return Medium;
};
