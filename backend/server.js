const express = require('express')
const dotenv = require("dotenv")
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cookies = require("cookie-parser");

const app = express()
dotenv.config()

const {PORT,MONGODB_URL_CLOUD,MONGODB_URL_LOCAL} = process.env
const {router} = require('./routes/index')


app.use(bodyParser.json())
app.use(cors())
app.use(cookies());

app.use("/api/" , router)


const start = async () => {
    try {
        const conn = await mongoose.connect(MONGODB_URL_LOCAL)
        app.listen(PORT , () => {
            console.log("listening to port ",PORT)
        })
        if(conn) 
            console.log("Succesfully connected to DB")
    } catch(error) {
        console.log(error)
    }
}

start()