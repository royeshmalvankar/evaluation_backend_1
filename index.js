const express=require("express")
const connect_To_db = require("./database/db")
const morgan = require("morgan")
const userRoute = require("./route/user.route")
const courseRoute = require("./route/course.route")

const port = 3001
const app = express()
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :remote-user [:date[clf]]'))

app.use("/user",userRoute)
app.use("/course",courseRoute)



app.listen(port,(req,res)=>{
        connect_To_db()
        console.log(`Connected to the port ${port}`)
})

