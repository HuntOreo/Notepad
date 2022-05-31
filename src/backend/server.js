const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

//Middleware
app.use(cors());
app.use(bodyParser.json())
require('dotenv').config() //.env middleware to read environment variables.
const uri = process.env.URI //Reads uri from .env 

//import routes 
const getRoutes = require('./routes/get.routes')
const postRoutes = require('./routes/post.routes')
const deleteRoutes = require('./routes/delete.routes')
const updateRoutes = require('./routes/update.routes')
app.use('/api', getRoutes)
app.use('/api/post', postRoutes)
app.use('/api/delete', deleteRoutes)
app.use('/api/update', updateRoutes)

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