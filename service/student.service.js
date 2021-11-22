const student = require("../model/student.schema")

exports.crearteStudents = async (req, res, next) => {
    
    const students= new student({
        name: req.body.name,
        email: req.body.email,
        mobileno: req.body.mobileno,
        assigned:"no"


    })
    var response = await students.save();
    res.send(response)
}
exports.updatestudents = async (req, res, next) => {
   
    const id = req.params.id;
    console.log(req.params.id)
    var response = await student.findByIdAndUpdate(id, {
        mentor: req.body.mentor,
        assigned:req.body.assigned
    }, { new: true })
    res.send(response)

}
exports.unassigned=async(req, res, next)=>{
    var response=await student.find({assigned:"no"})
    console.log(response)
    res.send(response)
}
exports.allStudent=async(req,res,next)=>{
    var response=await student.find()
    res.send(response)
}