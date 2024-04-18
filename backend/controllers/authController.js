require("dotenv").config();
const jwt = require("jsonwebtoken");
const userModel = require('../models/UserModel');
const bcrypt = require("bcryptjs")
const {createToken} = require("../utils/authUtils")

// /api/users/signin POST
// signs in the user and returns a jwt token
const signIn =  async  (request,response) => {
    const { username : givenUsername , password : givenPassword} = request.body
    console.log(request.body)
    const User = await userModel.findOne({"username" : givenUsername})
    if(! User) {
        response.send({"error" : "USERNAME_NOT_FOUND"})
    } else {
        const {password} = User
        console.log(password)
        const auth = await bcrypt.compare(givenPassword,password)
        if(auth) {
            const jwt= createToken(User._id)
            console.log(jwt)
            response.cookie(
                "token" , jwt , {
                withCredentials: true,
                httpOnly: false,
              }).status(201)
            response.send({"LOGGED_IN" :givenUsername , "token" : jwt})
        } else
            response.json({"error" : "WRONG_PASSWORD"});
    }
}

module.exports = {
    signIn
}