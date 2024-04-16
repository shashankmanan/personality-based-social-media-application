const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")

const userSchema = mongoose.Schema({
    "username" : {
        type : String ,
        required : true ,
        unique : true
    } , 
    "password" : {
        type : String ,
        required : true
    } ,
    "email" : {
        type : String , 
        required : true ,
        unique : true
    } , 
    "createdAt" : {
        type : Date,
        default : new Date()
    }
})


module.exports = mongoose.model("User", userSchema)