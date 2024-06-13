const mongoose = require('mongoose')

const explorerDBSchema = mongoose.Schema({
    username : {
        type : String ,
        required : true
    } 
})

module.exports  = mongoose.model('explorer',explorerDBSchema)