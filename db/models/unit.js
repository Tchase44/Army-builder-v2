const mongoose = require('mongoose'),
      Weapon = require('./weapon')

const Unit = new mongoose.Schema({
    rank:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    wounds:{
        type: String,
        required: true
    },
    movement: {
        type: String,
        required: true
    },
    bravery: {
        type: String,
        required: true
    },
    _save: {
        type: String,
        required: true
    },
    weapons: [],
    army_id: {
        type: mongoose.Schema.Types.ObjectId
    }
})

mongoose.model("Unit",Unit)
module.exports = mongoose