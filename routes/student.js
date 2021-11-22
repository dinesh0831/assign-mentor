var express = require('express');
var router = express.Router();
const student=require("../service/student.service")

/* GET users listing. */
router.post('/',student.crearteStudents)
router.patch("/:id",student.updatestudents)
router.get("/unassigned",student.unassigned)
router.get("/allStudent",student.allStudent)
module.exports = router;
