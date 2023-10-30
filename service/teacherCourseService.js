const { models } = require("../models/index");
module.exports = {
  createCourseTeacher: async (data) => {
    const result = await models.TeacherCourse.create({
      teacherId: data.teacherId,
      courseId: data.courseId,
    });
    return result;
  },

  getTeacherCourses: async (data) => {
    console.log(data);
    const result = await models.teacher.findOne({
      where: { id: data.teacherId },
      include: { model: models.course, as: "Course" },
    });
    return result.toJSON();
  },
  getCourseTeachers: async (data) => {
    const result = await models.course.findOne({
      where: { id: data.courseId },
      include: {
        model: models.teacher,
        as: "Teacher",
      },
    });
    return result;
  },
};
