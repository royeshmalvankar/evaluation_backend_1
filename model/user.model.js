const mongoose = require("mongoose")
const { type } = require("os")

const userSchema = new mongoose.Schema({
 
        id: {type:String , required:true},
        username: {type:String, required:true},
        password: {type:String, required:true},
        enrolledCourse: {type:String,required:true}
          
})

const userModel = mongoose.model("UserModel",userSchema)

module.exports = userModel