/*
Users  /users
-> get all users
    /  GET
-> get 1 user
    /:id GET
-> create a user
    /create POST
-> update user profile
    /update PUT
-> delete user profile
    /
*/

const {Router} = require('express')
const userRouter = Router()

//   /api/users/  GET
// get all users 
userRouter.get('/' , (request,response) => {
    response.send("this is users GET");
})


module.exports = userRouter