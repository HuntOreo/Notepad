const mongoose = require('mongoose')

const Notepad = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    date: {
        type: Date, 
        default: Date.now
    },
    favorite: {
        type: Boolean,
        default: false
    }

})

module.exports = mongoose.model('Notepad', Notepad)