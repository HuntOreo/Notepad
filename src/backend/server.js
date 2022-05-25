const express = require('express')
const app = express()
const mongoose = require('mongoose')

//mongoose Models 
const User = require('./schemas/users.schema')

//.env middleware
require('dotenv').config()

const uri = process.env.URI


//connect to mongo database
const connectMongo = async () => {
    await mongoose.connect(process.env.URI)
}


app.get('/', (req, res) => {
    res.send('Welcome')
})

app.get('/users', async (req, res) => {
    const user = await User.find()
    console.log(user)
    res.send('Users')
})

app.get('/notes')

app.listen(5000, () => {
    console.log('Server is listening....')
})