const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")

const userSchema = mongoose.Schema({
    "Username" : {
        type : String ,
        required : true ,
        unique : true
    } , 
    "Password" : {
        type : String ,
        required : true
    } ,
    "Email" : {
        type : String , 
        required : true
    } , 
    "createdAt" : {
        type : Date,
        default : new Date()
    }
})


module.exports = mongoose.model("User", userSchema)