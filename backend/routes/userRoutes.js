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
const {createUser,getUsers,updateProfile,getProfile} = require('../controllers/userController')
const {signIn} = require('../controllers/authController')

//   http://localhost:5000/api/users/  GET
// get all users 
userRouter.get('/' , getUsers)

//   http://localhost:5000/api/users/create  POST
// creates new user 
userRouter.post('/create', createUser)

//   http://localhost:5000/api/users/signin  POST
// signs in a user
userRouter.post('/signin', signIn)

//   http://localhost:5000/api/users/profile/update PUT
// updates user profile
userRouter.put('/profile/update' , updateProfile)

//   http://localhost:5000/api/users/profile/get POST
// fetches a user's profile
userRouter.post('/profile/get' , getProfile)

module.exports = userRouter