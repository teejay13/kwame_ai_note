const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title:{
        type: String,
        unique: true,
        required: true
    },
    body:{
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: Date
    
})

module.exports = Note = mongoose.model('note',NoteSchema)