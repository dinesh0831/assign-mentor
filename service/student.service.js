const student = require("../model/student.schema")

exports.students = async (req, res, next) => {
    console.log(req.user)
    const student= new student({
        name: req.body.name,
        email: req.body.email,
        mobileno: req.body.mobileno


    })
    var response = await student.save();
    res.send(response)
}
exports.updatestudents = async (req, res, next) => {
   
    const id = req.params.id;
    console.log(req.params.id)
    var response = await student.findByIdAndUpdate(id, {
        mentor: req.body.mentor
    }, { new: true })
    res.send(response)

}