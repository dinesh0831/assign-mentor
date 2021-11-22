const mentor = require("../model/mentor.schema")

exports.mentors=async (req,res,next)=>{
    
    const host=new mentor({
        name:req.body.name,
        email:req.body.email,
        mobileno:req.body.mobileno
           
          
    })
    var response=await host.save();
    res.send(response)
}
exports.updateMentors = async (req, res, next) => {
    console.log(req.user)
const id=req.params.id;
console.log(req.params.id)
var data=await mentor.findById(id)
console.log(data)
var students=data.studentList
await students.push(req.body.student)

var response=await mentor.findByIdAndUpdate( id,  {
    studentList:students
},{ new: true })
res.send(response)

}
exports.getMentors=async(req,res)=>{
    const id=req.params.id
    try{
        const data= await mentor.findById(id)
        res.send(data)
        }
        catch(err)
        {
            res.send(err)
        }
}
exports.getAll=async(req,res)=>{
      try{
        const data= await mentor.find({})
        res.send(data)
        }
        catch(err)
        {
            res.send(err)
        }
    }