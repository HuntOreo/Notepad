const mongoose = require('mongoose')

const Note = mongoose.Schema({
    notepadID: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
    ,
    date: {
        type: Date,
        default: Date.now() 
    }
})

module.exports = mongoose.model('Note', Note)