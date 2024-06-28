const explorerDB = require("../models/explorerDB")
const peacemakerDB = require("../models/peacemakerDB")
const plannerDB = require("../models/plannerDB")
const socialbtfDB = require("../models/socialbtfDB")
const sentinelDB = require("../models/sentinelDB")
const tribeDB = require("../models/tribeDB")

// http://localhost:5000/api/tribes/add POST
// adds a user to their respective tribes
// request.body => username , tribe
const addToTribe = async (request,response) => {
    try {
        const {tribe,username} = request.body
        await tribeDB.create(request.body)
        console.log(tribe)
        let model = ""
        switch(tribe) {
            case "The_Explorer" : 
                explorerDB.create({"username" : username})
                break;
            case "The_Peacemaker" : 
                peacemakerDB.create({"username" : username})
            break;
            case "The_Sentinel" : 
                sentinelDB.create({"username" : username})
                break;
            case "The_Planner" : 
                plannerDB.create({"username" : username})
                break;
            case "The_Socialbutterfly" : 
                socialbtfDB.create({"username" : username})
                break;
    }
        response.status(200).json({"Status" : "SUCCESS"})
    }
    catch(error) {
        console.log(error)
        response.status(201).json({"ERROR" : "SOMETHING_WENT_WRONG" , "Errordesc" : error})
    }
    
}


// http://localhost:5000/api/tribes/view POST
// adds a user to their respective tribes
// request.body => username
const getTribe = async (request,response) => {
    try {
        console.log("req" + request.body)
        const {username} = request.body
        console.log(username)
        const record = await tribeDB.findOne({"username" : username})
        console.log(record.tribe)
        response.status(200).json({"username" : username , "tribe" : record.tribe})
    }
    catch(error) {
        response.send("Error")
    }
}

// http://localhost:5000/api/tribes/viewall POST
// gets all users
// request.body => tribe

const getByTribes = async (request,response) => {
    const {tribe} = request.body
    const records = await tribeDB.find({"tribe" : tribe})
    console.log(records)
    response.status(200).json(records)
}

module.exports = {
    addToTribe , getTribe , getByTribes
}