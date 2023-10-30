const { DataTypes } = require("sequelize");
const sequelize = require("../../common/dbConnection");
const teacher = sequelize.define(
  "teacher",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    qualification: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subject: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "teacher",
  }
);

module.exports = teacher;
