
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
    }
   

})
const student = mongoose.model("students", StudentList, "students");
module.exports = student
