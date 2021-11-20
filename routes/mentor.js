var express = require('express');
var router = express.Router();
const mentor=require("../service/mentor.service")
router.patch("/:id",mentor.updateMentors)
/* GET users listing. */
router.post('/',mentor.mentors )
router.get('/:id/studentList',mentor.getMentors )
module.exports = router;
