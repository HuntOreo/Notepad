const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

//Middleware
app.use(bodyParser.json())
require('dotenv').config() //.env middleware to read environment variables.
const uri = process.env.URI //Reads uri from .env 

//import routes 
const getRoutes = require('./routes/get.routes')
const postRoutes = require('./routes/post.routes')
app.use('/', getRoutes)
app.use('/post', postRoutes)


//connect to mongo database
mongoose.connect(process.env.URI, () => {
        console.log('Connected to MongoDB')
    }
)

app.listen(5000, () => {
    console.log('Server is listening....')
})