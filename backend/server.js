const express = require('express')
const dotenv = require("dotenv")
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
dotenv.config()

const {PORT,MONGODB_URL} = process.env
const {router} = require('./routes/index')

app.use("/api/" , router)
app.use(cors)
app.use(express.json())

try {
    mongoose.connect(MONGODB_URL).then( () => {
        console.log("succesfully connected to mongo DB")
    })
    app.listen(PORT , () => {
        console.log("App is running on ",PORT)
    })
} catch(error) {
    console.log("error")
}

