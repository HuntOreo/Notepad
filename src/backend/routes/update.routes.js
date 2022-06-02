const express = require('express')
const router = express.Router()

const User = require('../schemas/users.schema')
const Notepad = require('../schemas/notepads.schema')
const Note = require('../schemas/notes.schema')

router.put('/users/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        password: req.body.password
    })

    res.json(user)
})

router.put('/notepads/:id', async (req, res) => {
    const notepad = await Notepad.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        padIDs: req.body.padIDs,
        favorite: req.body.favorite
    })

    res.json(notepad)
})

router.put('/notes/:id', async (req, res) => {
    await Note.findByIdAndUpdate(req.params.id, {
        notepadID: req.body.notepadID,
        body: req.body.body,
        color: req.body.color
    })
    
    const note = await Note.findById(req.params.id)
    res.json(note)
})


module.exports = router