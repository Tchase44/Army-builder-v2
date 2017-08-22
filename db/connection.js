const mongoose = require('mongoose')

// Schema needed?

const armySchema = new mongoose.Schema({
	army: Object,
})

mongoose.model("Army", armySchema)
mongoose.connect("mongodb://localhost/lizardmen")

module.exports = mongoose;

