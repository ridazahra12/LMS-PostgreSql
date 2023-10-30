const studentService = require("../../service/studentservice");
const userController = require("./userController");
module.exports = {
  createStudent: async (req, res) => {
    const { username, email, phoneNumber, password } = req.body;
    const { rollNumber, department, semester } = req.body;
    const user = await userController.createUsersHelper({
      username,
      email,
      phoneNumber,
      password,
    });
    //sending key:value pair
    const data = await studentService.createStudent({
      rollNumber: rollNumber,
      department: department,
      semester: semester,
      userID: user.id,
    });
    res.send(data);
  },

  getStudent: async (req, res) => {
    const data = await studentService.getStudent();
    res.send(data);
  },
  updateStudent: async (req, res) => {
    const data = await studentService.updateStudent(req.params.id, req.body);
    res.send(data);
  },
  deleteStudent: async (req, res) => {
    const data = await studentService.deleteStudent(req.params.id);
    res.send(data);
  },
};
