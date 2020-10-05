'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Driver extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Driver.hasMany(models.Car, { foreignKey: "driverId" });
    }
  };
  Driver.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    drivingExperience: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Driver',
  });
  return Driver;
};