'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Board extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Board.belongsTo(models.Institute, {
        foreignKey: "institute_id",
      });
      Board.hasMany(models.Class_category, {
        foreignKey: "board_id",
      });
      Board.hasMany(models.standard, {
        foreignKey: "board_id",
      });
    }
  }
  Board.init({
    institute_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Board',
  });
  return Board;
};