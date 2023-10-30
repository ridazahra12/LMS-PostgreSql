var router = require("express").Router();
const { courseController } = require("../controller/index");
router.get("/getAllCourse", courseController.getCourse);
router.post("/createCourse", courseController.createCourse);

module.exports = router;
