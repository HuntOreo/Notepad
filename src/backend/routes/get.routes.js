const express = require('express')
const router = express.Router()

const User = require('../schemas/users.schema')

router.get('/', (req, res) => {
    res.send('Welcome')
})

router.get('/users', (req, res) => {
    res.send('Users')
})

router.get('/notepads', (req, res) => {
    res.send('Notepads')
})

//get by id
router.get('/user/:id', async (req, res) => {
    const user = await User.findById(req.params.id)
    console.log(user)
})

module.exports = router