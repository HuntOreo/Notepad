const express = require('express')
const router = express.Router()

//mongoose Models 
const User = require('../schemas/users.schema')
const Notepad = require('../schemas/notepads.schema')

router.post('/user', async (req, res) => {
   const user = new User({
       name: req.body.name,
       password: req.body.password
   })

   try {
       const data = await user.save()
       res.json(data)
   } catch(err) {
       res.send(err)
   }
    
})

router.post('/notepad', async (req, res) => {
    const notepad = new Notepad({
        title: req.body.title,
        userID: req.body.userID,

    })
 
    try {
        const data = await notepad.save()
        res.json(data)
    } catch(err) {
        res.send(err)
    }
     
 })

module.exports = router