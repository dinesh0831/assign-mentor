const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MentorList = new Schema({
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
    studentList:{
        type:Array
    }
   
  

})
const Mentor= mongoose.model("mentor", MentorList, "Mentor");
module.exports = Mentor
