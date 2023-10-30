const teacherService = require("../../service/teacherService");
const userController = require("./userController");
module.exports = {
  createTeacher: async (req, res) => {
    const { username, email, phoneNumber, password } = req.body;
    const { qualification, subject, department } = req.body;
    const user = await userController.createUsersHelper({
      username,
      email,
      phoneNumber,
      password,
    });
    //sending key:value pair
    const data = await teacherService.createTeacher({
      qualification: qualification,
      subject: subject,
      department: department,
      userID: user.id,
    });
    res.send(data);
  },

  getTeacher: async (req, res) => {
    const data = await teacherService.getTeacher();
    res.send(data);
  },
  updateTeacher: async (req, res) => {
    const data = await teacherService.updateTeacher(req.params.id, req.body);
    res.send(data);
  },
  deleteTeacher: async (req, res) => {
    const data = await teacherService.deleteTeacher(req.params.id);
    res.send(data);
  },
};
