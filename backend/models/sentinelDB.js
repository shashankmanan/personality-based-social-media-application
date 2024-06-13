const mongoose = require('mongoose')

const sentinelDBSchema = mongoose.Schema({
    username : {
        type : String ,
        required : true
    } 
})

module.exports  = mongoose.model('sentinel',sentinelDBSchema)