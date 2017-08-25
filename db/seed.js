let mongoose = require('./connection.js')
let seedData = require('./lizardmen.json')

let Army = mongoose.model("Army")

Army.remove({}).then(()=>{
	Army.collection.insert(seedData).then(()=>{
		console.log('Seeds Inserted')
		process.exit()
	})
})