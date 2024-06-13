const mongoose = require('mongoose')
const userModel = require('../models/UserModel')
const { response } = require('express')
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const {createToken} = require('../utils/authUtils')
const profileModel = require("../models/ProfileModel")

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

//https://localhost:5000/api/users/profile/update PUT
// updates user profile
// request.body => username
const updateProfile = async (request,response) => {
    try {
        const profileExists = await profileModel.findOne({
            username : request.body.username
        })
        if(! profileExists) {
            const profileUpdated = await profileModel.create({
                "username" : request.body.username ? request.body.username : "" ,
                "FirstName" : request.body.FirstName ? request.body.FirstName : "",
                "LastName" : request.body.LastName ? request.body.LastName : "",
                "Address" : request.body.Address ? request.body.Address : "",
                "PhoneNumber" : request.body.PhoneNumber ? request.body.PhoneNumber : "",
                "Birthday" : request.body.Birthday ? request.body.Birthday : "",
                "Bio" : request.body.Bio ? request.body.Bio : ""
            })
            if(profileUpdated)
                response.status(201).json({"message" : "SUCCESSFULLY_UPDATED" , "username" : request.body.username})
            else
                response.json({"message" : "PROFILE_NOT_UPDATED" , "username" : request.body.username})
        } else {
            const profileUpdated = await profileModel.updateOne( {
                "username" : request.body.username
            } ,  {
                "username" : request.body.username ? request.body.username : "" ,
                "FirstName" : request.body.FirstName ? request.body.FirstName : "",
                "LastName" : request.body.LastName ? request.body.LastName : "",
                "Address" : request.body.Address ? request.body.Address : "",
                "PhoneNumber" : request.body.PhoneNumber ? request.body.PhoneNumber : "",
                "Birthday" : request.body.Birthday ? request.body.Birthday : "",
                "Bio" : request.body.Bio ? request.body.Bio : ""
            })
            if(profileUpdated)
                response.status(201).json({"message" : "SUCCESSFULLY_UPDATED" , "username" : request.body.username})
            else
            response.status(501).json({"message" : "SERVER_ERROR" , "username" : request.body.username})            
        }
    }
    catch(error) {
        response.status(501).json({"error" : "SERVER_ERROR","errorDesc" : error})
    }
}

//https://localhost:5000/api/users/profile/get POST
// gets user profile
// request.body => username
const getProfile = async (request,response) => {
    try {
        const userProfile = await profileModel.findOne({username : request.body.username})
        if(userProfile) 
           {
            response.json(userProfile)
           }
        else
            response.send({"error" : "PROFILE_NOT_FOUND"})
    }
    catch(error) {
        response.send({"error" : "SERVER_ERROR" , "errorDesc" : error})
    }
}

module.exports = {
    createUser , getUsers , updateProfile , getProfile
}