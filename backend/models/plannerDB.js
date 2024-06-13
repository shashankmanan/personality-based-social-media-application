const mongoose = require('mongoose')

const plannerDBSCHEMA = mongoose.Schema({
    username : {
        type : String ,
        required : true
    } 
})

module.exports  = mongoose.model('planner',plannerDBSCHEMA)