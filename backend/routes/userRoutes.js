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
const {createUser,getUsers, checkIfUsernameExists , checkIfEmailExists} = require('../controllers/userController')
//   http://localhost:5000/api/users/  GET
// get all users 
userRouter.get('/' , getUsers)

//   http://localhost:5000/api/users/create  POST
// creates new user 
userRouter.post('/create', createUser)

module.exports = userRouter