let mongoose = require('mongoose')

// Schema needed?

let ArmySchema = new mongoose.Schema({
    army: [{}],
})

mongoose.model("Army", ArmySchema)