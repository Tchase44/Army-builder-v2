const mongoose = require('mongoose')
const seedData = require('./lizardmen.json')

let Army = mongoose.model("Army")

Army.remove({}).then(()=>{
	Army.collection.insert(seedData).then(()=>{
		console.log('Seeds Inserted')
		process.exit
	})
})