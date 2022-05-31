const express = require('express')
const router = express.Router()

const User = require('../schemas/users.schema')
const Notepad = require('../schemas/notepads.schema')
const Note = require('../schemas/notes.schema')

router.put('/users/:id', async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        password: req.body.password
    })

    res.send('User Updated')
})

router.put('/notepads/:id', async (req, res) => {
    await Notepad.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        padIDs: req.body.padIDs,
        favorite: req.body.favorite
    })

    res.send('Notepad Updated')
})

router.put('/notes/:id', async (req, res) => {
    await Note.findByIdAndUpdate(req.params.id, {
        notepadID: req.body.notepadID,
        body: req.body.body,
        color: req.body.color
    })
    
    res.send('Note updated')
})


module.exports = router