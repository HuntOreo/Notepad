const express = require('express')
const router = express.Router()

const User = require('../schemas/users.schema')
const Notepad = require('../schemas/notepads.schema')

router.get('/users', async (req, res) => {
    const users = await User.find()
    res.json(users)
})

router.get('/notepads', (req, res) => {
    res.send('Notepads')
})

//get by id
router.get('/users/user/:id', async (req, res) => {
    const user = await User.findById(req.params.id)
    res.json(user)
})

router.get('/notepads/notepad/:id', async(req, res) => {
    const notepad = await Notepad.findById(req.params.id)
    res.json(notepad)
})

module.exports = router