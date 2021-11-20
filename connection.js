const mongoose=require("mongoose")

exports.connect=async()=>{
   
    try{
   await mongoose.connect( "mongodb+srv://Dinesh:Dinesh31@cluster0.ed3jk.mongodb.net/assign_mentor?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true})
   
    console.log("success mongoose")
    }
    catch(err)
    {
        console.log(err)
    }
}