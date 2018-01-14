const mongoose = require('mongoose')

const Weapon = new mongoose.Schema({
    name: {
        type: String
    },
    combat_type: {
        type: String
    },
    range: {
        type: String
    },
    attacks: {
        type: String
    },
    to_hit: {
        type: String
    },
    to_wound: {
        type: String
    },
    damage: {
        type: String
    },
    unit_id:{
        type: mongoose.Schema.Types.ObjectId
    }
})

mongoose.model("Weapon", Weapon)
module.exports = mongoose