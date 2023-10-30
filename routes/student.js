var router = require("express").Router();
const { studentController } = require("../controller/index");
router.get("/getStudent", studentController.getStudent);
router.post("/createStudent", studentController.createStudent);
router.put("/updateStudent/:id", studentController.updateStudent);
router.delete("/deleteStudent/:id", studentController.deleteStudent);

module.exports = router;
