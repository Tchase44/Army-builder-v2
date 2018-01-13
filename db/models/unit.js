const mongoose = require('mongoose')

const Weapon = new mongoose.Schema({
    name: {
        type: String
    },
    type: {
        type: String
    },
    range: {
        type: String
    },
    attacks: {
        type: String
    },
    to hit: {
        type: String
    },
    to wound: {
        type: String
    },
    damage: {
        type: String
    }
    unit_id: {
        type: mongoose.Schema.Types.ObjectId
    }
})

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
    save: {
        type: String,
        required: true
    },
    weapons: [Weapon],
    army_id: {
        type: mongoose.Schema.Types.ObjectId
    }
})

mongoose.model("Unit",Unit)