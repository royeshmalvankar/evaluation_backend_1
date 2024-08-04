const express=require("express")
const courseModel = require("../model/course.model")



const courseRoute = express.Router()

courseRoute.get("/",async(req,res)=>{
    try {
            const course = await courseModel.find()
            res.json({"message":"Date fetched","data":course})
    } catch (error) {
        res.send(`There is some error ${error}`)
    }
})

courseRoute.post("/", (req,res)=>{
       try {
         const course = new courseModel(req.body)
         course.save()
         res.json({"message":"Data posted","data":course})
       } catch (error) {
        res.send(`There is some error ${error}`)
       }

})

module.exports = courseRoute
      
      
      