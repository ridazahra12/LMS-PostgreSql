var router = require("express").Router();
const { teacherController } = require("../controller/index");

router.get("/getTeacher", teacherController.getTeacher);
router.post("/createTeacher", teacherController.createTeacher);
router.put("/updateTeacher/:id", teacherController.updateTeacher);
router.delete("/deleteTeacher/:id", teacherController.deleteTeacher);
module.exports = router;
