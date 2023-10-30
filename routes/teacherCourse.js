var router = require("express").Router();
const { teacherCourseController } = require("../controller/index");
router.post("/teacherCourse", teacherCourseController.createCourseTeacher);
router.get(
  "/teacher/:teacherID/courses",
  teacherCourseController.getCourseTeachers
);
router.get(
  "/course/:courseID/teachers",
  teacherCourseController.getTeacherCourses
);
