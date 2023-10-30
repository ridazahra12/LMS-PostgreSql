const teacherCourseService = require("../../service/teacherCourseService");

module.exports = {
  createCourseTeacher: async (req, res) => {
    const data = await teacherCourseService.createCourseTeacher(req.body);
    res.send(data);
  },

  getTeacherCourses: async (req, res) => {
    const data = await teacherCourseService.getTeacherCourses(req.body);
    res.send(data);
  },

  getCourseTeachers: async (req, res) => {
    const data = await teacherCourseService.getCourseTeachers(req.body);
    res.send(data);
  },
};
