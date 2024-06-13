const mongoose = require('mongoose')

const socialbtfDBSchema = mongoose.Schema({
    username : {
        type : String ,
        required : true
    } 
})

module.exports  = mongoose.model('socialbtf',socialbtfDBSchema)