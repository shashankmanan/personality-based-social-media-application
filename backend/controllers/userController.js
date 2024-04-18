const mongoose = require('mongoose')
const userModel = require('../models/UserModel')
const { response } = require('express')
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const {createToken} = require('../utils/authUtils')

const createUser = async (request,response) => {
    try {
        console.log("in req")
        console.log(request.body)
        request.body.password = await bcrypt.hash(request.body.password , 10)
        console.log(request.body)
        const record = await userModel.create(request.body)
        if(! record)
            throw new error();
        const token = createToken(record._id)
        response.cookie(
            "token" , jwt , {
            withCredentials: true,
            httpOnly: false,
          }).status(201)
        response.send({"LOGGED_IN" :request.body.username , "token" : token})
    } catch(error) {
        console.log(error)
        if(error.errorResponse && error.errorResponse.code == 11000) { 
            response.send({"error" : "KEY_ERROR" , "errorDesc" : `${error.errorResponse.keyValue.hasOwnProperty("username") ? "username" : "email"} already exists`, "attribute" : error.errorResponse.keyValue.hasOwnProperty("username") ? "username" : "email" })   
        }
        else 
            response.send({"error" : "SERVER_ERROR" , "errorDesc" : error})
    }
}

const getUsers = async (request,response) => {
    const users = await userModel.find()
    response.send({"users" : users})
}




module.exports = {
    createUser , getUsers
}