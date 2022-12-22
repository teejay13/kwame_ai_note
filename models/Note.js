const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title:{
        type: String,
        unique: true,
        required: true
    },
    body:{
        type: String,
    }
},{
    timestamps: true
})

module.exports = Note = mongoose.model('note',NoteSchema)