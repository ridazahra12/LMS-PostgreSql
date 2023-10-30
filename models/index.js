let sequelize = require("../common/dbConnection");
let user = require("./definitions/user");
let student = require("./definitions/student");
let teacher = require("./definitions/teacher");
let course = require("./definitions/course");

user.hasOne(student, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
}); // user has one student

student.belongsTo(user, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});

user.hasOne(teacher, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});

teacher.belongsTo(user, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});

course.belongsToMany(teacher, {
  through: "TeacherCourse",
  as: "Teacher",
  onDelete: "CASCADE",
  foreignKey: { name: "courseId", allowNull: false },
});

teacher.belongsToMany(course, {
  through: "TeacherCourse",
  as: "Course",
  onDelete: "CASCADE",
  foreignKey: { name: "teacherId", allowNull: false },
});

const models = sequelize.models;
console.log(models);
const db = {};
db.sequelize = sequelize;
module.exports = { db, models };
