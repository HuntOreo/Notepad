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
const deleteRoutes = require('./routes/delete.routes')
app.use('/api', getRoutes)
app.use('/api/post', postRoutes)
app.use('/api/delete', deleteRoutes)

//connect to mongo database
mongoose.connect(uri, () => {
        console.log('Connected to MongoDB')
    }
)

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.listen(5000, () => {
    console.log('Server is listening....')
})