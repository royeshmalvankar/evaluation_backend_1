const express=require("express")
const userModel = require("../model/user.model")


const userRoute = express.Router()

userRoute.get("/",async(req,res)=>{
    try {
            const user = await userModel.find()
            res.json({"message":"Date fetched","data":user})
    } catch (error) {
        res.send(`There is some error ${error}`)
    }
})

userRoute.post("/",(req,res)=>{
       try {
         const user = new userModel(req.body)
         user.save()
         res.json({"message":"Data posted","data":user})
       } catch (error) {
        res.send(`There is some error ${error}`)
       }

})

module.exports = userRoute