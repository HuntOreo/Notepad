const express = require('express')
const router = express.Router()

//mongoose Models 
const User = require('../schemas/users.schema')

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

module.exports = router