const {Router} = require('express')
const userRouter = require('./userRoutes')

const router = Router()

router.use('/users' , userRouter)

router.get('/' , (req,res) => {
    res.send("hello")
})

router.get('/test' , (req,res) => {
    res.send('test')
})



module.exports = {
    router
}