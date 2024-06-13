const {Router} = require('express')
const userRouter = require('./userRoutes')
const tribeRouter = require('./tribeRoutes')
const Message = require('../server')

const router = Router()

router.use('/users' , userRouter)
router.use('/tribes' , tribeRouter)

router.get('/' , (req,res) => {
    res.send("hello")
})

router.get('/test' , (req,res) => {
    res.send('test')
})

module.exports = {
    router
}