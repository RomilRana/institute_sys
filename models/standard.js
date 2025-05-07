'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class standard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      standard.belongsTo(models.Class_category, {
        foreignKey: 'class_category_id',
      });
      standard.belongsTo(models.Board, {
        foreignKey: 'board_id',
      });
      standard.belongsTo(models.Medium, {
        foreignKey: 'medium_id',
      });
      standard.belongsTo(models.Institute, {
        foreignKey: 'institute_id',
      });
    }
  }
  standard.init({
    institute_id: DataTypes.INTEGER,
    board_id: DataTypes.INTEGER,
    medium_id: DataTypes.INTEGER,
    class_category_id: DataTypes.INTEGER,
    standard_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'standard',
  });
  return standard;
};