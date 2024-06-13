
const {Router} = require('express')
const tribeRouter = Router()

const {addToTribe,getTribe,getByTribes} = require('../controllers/tribeController')

tribeRouter.post("/add",addToTribe)

tribeRouter.post("/view" , getTribe)

tribeRouter.post("/viewall" , getByTribes)

module.exports = tribeRouter