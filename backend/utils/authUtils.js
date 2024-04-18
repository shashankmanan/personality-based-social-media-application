const jwt = require('jsonwebtoken')
require('dotenv').config()

const createToken = (_id) => {
    return jwt.sign({_id : _id}, process.env.SECRET_STRING_JWT, { expiresIn : '1d'})
}


module.exports = {
    createToken
}