"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Institute extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Institute.hasMany(models.User, {
      //   foreignKey: "institute_id",
      // });
      // Institute.hasMany(models.Board, {
      //   foreignKey: "institute_id",
      // });
      // Institute.hasMany(models.Class_category, {
      //   foreignKey: "institute_id",
      // });
      // Institute.hasMany(models.Medium, {
      //   foreignKey: "institute_id",
      // });
      // Institute.hasMany(models.Course, {
      //   foreignKey: "institute_id",
      // });
      // Institute.hasMany(models.standard, {
      //   foreignKey: "institute_id",
      // });
    }
  }
  Institute.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.ENUM(
        "playhouse",
        "school",
        "college",
        "university",
        "competitive_exam"
      ),
    },
    {
      sequelize,
      modelName: "Institute",
    }
  );
  return Institute;
};
