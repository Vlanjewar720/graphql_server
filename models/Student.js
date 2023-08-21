const mongoose = require("mongoose");

const Student = mongoose.model("Student", {
  firstName: String,
  lastName: String,
  age: Number,
});

module.exports = { Student };


// const mongoose = require("mongoose");

// const studentSchema = new mongoose.Schema({
//     firstName:{
//         type:String,
       
//     },
//     lastName:{
//         type:String,
       
//     },
//     age:{
//         type:Number,
      
//     },
   
    
// });

// const stud = mongoose.model("Student",studentSchema)

// module.exports = stud ;


