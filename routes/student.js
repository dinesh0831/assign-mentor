var express = require('express');
var router = express.Router();
const student=require("../service/student.service")

/* GET users listing. */
router.post('/',student.students)
router.patch("/:id",student.updatestudents)
module.exports = router;
