const express = require('express')
const router = express.Router()

const User = require('../schemas/users.schema')
const Notepad = require('../schemas/notepads.schema')

router.delete('/users/user/:id', async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id)
    console.log(user)
})

module.exports = router