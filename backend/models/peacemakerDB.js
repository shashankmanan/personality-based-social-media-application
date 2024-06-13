const mongoose = require('mongoose')

const peacemakerDBSchema = mongoose.Schema({
    username : {
        type : String ,
        required : true
    } 
})

module.exports  = mongoose.model('peacemaker',peacemakerDBSchema)