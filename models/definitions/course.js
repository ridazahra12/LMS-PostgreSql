const { DataTypes } = require("sequelize");
let sequelize = require("../../common/dbConnection");
const course = sequelize.define(
  "course",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: true,
      type: DataTypes.STRING,
    },

    creditHours: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "course",
  }
);

module.exports = course;
