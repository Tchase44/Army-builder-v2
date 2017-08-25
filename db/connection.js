let mongoose = require('mongoose')

// Schema needed?

let ArmySchema = new mongoose.Schema({
	army: Object,
})

mongoose.model("Army",ArmySchema)
mongoose.connect("mongodb://localhost/lizardmen")

module.exports = mongoose

