const { models } = require("../models/index");
module.exports = {
  getCourse: async () => {
    const result = await models.course.findAll();
    return result;
  },
  createCourse: async (data) => {
    console.log(data);
    const result = await models.course.create(data);
    console.log(result);
    return result;
  },
  updateCourse: async (id, data) => {
    console.log(data);
    console.log(id);
    const result = await models.course.update(data, { where: { id: id } });
    console.log(result);
    return result;
  },

  deleteCourse: async (id) => {
    console.log(id);
    let result = await models.course.findByPk(id);
    console.log(result);
    if (result) {
      result = await models.course.destroy({ where: { id: id } });
      return result;
    }
    return 404;
  },
};
