const mongoose = require("mongoose")
const { type } = require("os")

const courseSchema = new mongoose.Schema({
 
        id: {type:String , required:true},
        title: {type:String, required:true},
        category: {type:String, required:true},
        difficulty: {type:String, required:true},
        description: {type:String, required:true}
          
})

const courseModel = mongoose.model("CourseModel",courseSchema)

module.exports = courseModel