
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentList = new Schema({
    email: {
        type: String,
        required:true
    },
    name: {
        type: String,
        
        required: true,
        
    },
   
    mobileno: {
        type: Number,
        required: true,
    },
    mentor:{
        type:String
    },
    assigned:{
       type:String
   }

})
const student = mongoose.model("student", StudentList, "student");
module.exports = student
