const { models } = require("../models/index");
module.exports = {
  getTeacher: async () => {
    const result = await models.teacher.findAll();
    return result;
  },
  createTeacher: async (data) => {
    console.log(data);
    const result = await models.teacher.create(data);
    console.log(result);
    return result;
  },

  updateTeacher: async (id, data) => {
    console.log(data);
    console.log(id);
    const result = await models.teacher.update(data, { where: { id: id } });
    console.log(result);
    return result;
  },

  deleteTeacher: async (id) => {
    console.log(id);
    let result = await models.teacher.findByPk(id);
    console.log(result);
    if (result) {
      result = await models.teacher.destroy({ where: { id: id } });
      return result;
    }
    return 404;
  },
};
