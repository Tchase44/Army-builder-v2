let mongoose = require('mongoose')

// Schema needed?

let ArmySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    army: [{}],
})

mongoose.model("Army", ArmySchema)
module.exports = mongoose