const express = require('express')
const router = express.Router()

const User = require('../schemas/users.schema')
const Notepad = require('../schemas/notepads.schema')

router.delete('/user/:id', async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

module.exports = router