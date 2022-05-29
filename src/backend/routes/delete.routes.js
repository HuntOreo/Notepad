const express = require('express')
const router = express.Router()

//Mongoose models
const User = require('../schemas/users.schema')
const Notepad = require('../schemas/notepads.schema')
const Note = require('../schemas/notes.schema')

router.delete('/users/user/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.redirect('gone!')
    } catch (error) {
        res.send(error)
    }
})

router.delete('/notepads/notepad/:id', async (req, res) => {
    try {
        await Notepad.findByIdAndDelete(req.params.id)
        res.send('gone!')
    } catch (error) {
        res.send(error)
    }
})

router.delete('/notes/note/:id', async (req, res) => {
    try {
        await Note.findByIdAndDelete(req.params.id)
        res.send('gone!')
    } catch (error) {
        res.send(error)
    }
})

module.exports = router