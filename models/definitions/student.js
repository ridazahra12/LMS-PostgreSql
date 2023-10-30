const { DataTypes } = require("sequelize");
let sequelize = require("../../common/dbConnection");
const student = sequelize.define(
  "student",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    rollNumber: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    semester: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "student",
  }
);

module.exports = student;
