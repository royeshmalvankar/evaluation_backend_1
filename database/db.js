const mongoose = require("mongoose")

const url="mongodb://127.0.0.1:27017/masai"

const connect_To_db = async()=>{
        await mongoose.connect(url)
        console.log("connected to db")
}

module.exports = connect_To_db