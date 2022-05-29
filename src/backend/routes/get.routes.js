const express = require('express')
const router = express.Router()

//Mongoose models
const User = require('../schemas/users.schema')
const Notepad = require('../schemas/notepads.schema')
const Note = require('../schemas/notes.schema')


//get all
router.get('/users', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        console.log(error)
    }
    
})

router.get('/notepads', async (req, res) => {
    try {
        const notepads = await Notepad.find()
        res.json(notepads)
    } catch (error) {
        console.log(error)
    }
    
})

router.get('/notes', async (req, res) => {
    try {
        const notes = await Note.find()
        res.json(notes)
    } catch (error) {
        console.log(error)
    }

})

//get user created notepads
router.get('/:user/notepads', async (req, res) => {
    try {
        const notepads = await Notepad.find({
            userID: req.params.user
        })
        res.json(notepads)
    } catch (error) {
        res.send(error)
    }
})

//get notes attached to notepad
router.get('/notepads/:notepad/notes', async (req, res) => {
    try {
        const notes = await Note.find({
            notepadID: req.params.notepad
        })
        res.json(notes)
    } catch (error) {
        res.send(error)
    }
})

//get by id
router.get('/users/user/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.json(user)    
    } catch (error) {
        console.log(error)
    }

})

router.get('/notepads/notepad/:id', async (req, res) => {
    try {
        const notepad = await Notepad.findById(req.params.id)
        res.json(notepad)  
    } catch (error) {
        console.log(error)
    }
    
})

router.get('/notes/note/:id', async (req, res) => {
    try {
        const note = await Note.findById(req.params.id)
        res.json(note)
    } catch (error) {
        console.log(error)
    }
   
})

module.exports = router