const mongoose = require('mongoose')

const tribeDBSchema = mongoose.Schema({
    username : {
        type : String ,
        required : true
    } ,
    tribe : {
        type : String ,
        required : true
    }
})

module.exports  = mongoose.model('tribe',tribeDBSchema)