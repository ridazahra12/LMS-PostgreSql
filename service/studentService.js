const { models } = require("../models/index");
module.exports = {
  getStudent: async () => {
    const result = await models.student.findAll();
    return result;
  },
  createStudent: async (data) => {
    console.log(data);
    const result = await models.student.create(data);
    console.log(result);
    return result;
  },

  updateStudent: async (id, data) => {
    console.log(data);
    console.log(id);
    const result = await models.student.update(data, { where: { id: id } });
    console.log(result);
    return result;
  },

  deleteStudent: async (id) => {
    console.log(id);
    let result = await models.student.findByPk(id);
    console.log(result);
    if (result) {
      result = await models.student.destroy({ where: { id: id } });
      return result;
    }
    return 404;
  },
};
