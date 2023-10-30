module.exports = {
  userController: require("./users/userController"),
  studentController: require("./users/studentController"),
  teacherController: require("./users/teacherController"),
  courseController: require("./users/courseController"),
  teacherCourseController: require("./users/teacherCourseController"),
  authController: require("../controller/common/authenticationController"),
};
