const express = require('express')
const router = express.Router()

const User = require('../schemas/users.schema')
const Notepad = require('../schemas/notepads.schema')

router.delete('/users/user/:id', async (req, res) => {

    try {
        await User.findByIdAndDelete(req.params.id)
        res.redirect('/api/users')
    } catch (error) {
        res.send(error)
    }
    
})

router.delete('/notepads/notepad/:id', async (req, res) => {
    try {
        await Notepad.findByIdAndDelete(req.params.id)
        res.redirect('/api/notepads')
    } catch (error) {
        
    }
})

module.exports = router