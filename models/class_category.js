'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Class_category.belongsTo(models.Institute, {
        foreignKey: 'institute_id',
      });
      Class_category.belongsTo(models.Board, {
        foreignKey: 'board_id',
      });
      Class_category.belongsTo(models.Medium, {
        foreignKey: 'medium_id',
      });
      Class_category.hasMany(models.standard, {
        foreignKey: 'class_category_id',
      });
    }
  }
  Class_category.init({
    institute_id: DataTypes.INTEGER,
    board_id: DataTypes.INTEGER,
    medium_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Class_category',
  });
  return Class_category;
};