const express = require('express')
const app = express()
const axios = require('axios');

//.env middleware
require('dotenv').config()

const uri = process.env.URI



//connect to mongo database



app.get('/', async (req, res) => {
    await getCollection('Test')
    res.send('Welcome')
})

app.get('/users', (req, res) => {
    res.send('Users')
})

app.get('/notes')

app.listen(5000, () => {
    console.log('Server is listening....')
})