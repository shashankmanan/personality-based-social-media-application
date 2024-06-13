
const {Router} = require('express')
const tribeRouter = Router()

const {addToTribe,getTribe} = require('../controllers/tribeController')

tribeRouter.post("/add",addToTribe)

tribeRouter.post("/view" , getTribe)
module.exports = tribeRouter