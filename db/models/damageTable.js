const mongoose = require('mongoose')

const DamageTable = new mongoose.Schema({
    rows:[
      {
        wounds_suffered: String,
        move: String,
        attack1_name: String,
        attack1_value: String,
        attack2_name: String,
        attack2_value: String
      }
    ],
    unit_id: {type: mongoose.Schema.Types.ObjectId},
    unit_name: {type: String},
})

mongoose.model("DamageTable",DamageTable)
module.exports = mongoose