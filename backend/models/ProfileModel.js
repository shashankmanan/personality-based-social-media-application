const mongoose = require('mongoose')

const profileSchema = mongoose.Schema({
    username : {
        type : String ,
        required : true
    } ,
    FirstName : {
        type : String
    } ,
    LastName : {
        type : String
    }, 
    Address : {
        type : String
    } ,
    PhoneNumber : {
        type : Number
    } ,
    Birthday : {
        type : Date
    } ,
    Bio : {
        type : String
    }
})

module.exports  = mongoose.model('profile',profileSchema)