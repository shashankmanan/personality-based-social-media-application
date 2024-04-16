const mongoose = require('mongoose')
const userModel = require('../models/UserModel')
const { response } = require('express')

const createUser = async (request,response) => {
    console.log("in req")
    try {
        const record = await userModel.create(request.body)
        console.log(record)
        response.send({"succesfully inserted..." :request.body})
    } catch(error) {
        if(error.errorResponse.code == 11000) {
            response.send({"error" : "Already Exists" , "attribute" : error.errorResponse.keyValue })   
        }
        else
            response.send({"Something went wrong" : error})
    }
}

const getUsers = async (request,response) => {
    const users = await userModel.find()
    response.send({"users" : users})
}

const checkIfUsernameExists = async (request,response) => {
    const {username} = request.body
    try {   
        const uname = await userModel.findOne( (i) => i.username === username)
        if(uname)
            response.send({"accountExists" : true, "attribute" : "username" , "username" : username})
        else
            response.send({"accountExists" : false, "attribute" : "username" , "username" : username})
    } catch(error) {
        response.send({"Something went wrong..." : error , "attribute" : "username" , "username" : username})
    }
}

const checkIfEmailExists = async(request,response) => {
    const {email} = request.body
    try {   
        const eId = await userModel.findOne( (i) => i.email === email)
        if(eId)
            response.send({"accountExists" : true, "attribute" : "email" , "email" : email})
        else
            response.send({"accountExists" : false, "attribute" : "email" , "email" : email})
    } catch(error) {
        response.send({"Something went wrong..." : error , "attribute" : "email" , "email" : email})
    }
} 

module.exports = {
    createUser , getUsers , checkIfEmailExists ,
    checkIfUsernameExists 
}