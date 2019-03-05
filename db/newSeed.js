const mongoose = require('mongoose'),
      weaponImport = require('./models/weapon'),
      unitImport = require('./models/unit')
const Unit = mongoose.model("Unit")
const Weapon = mongoose.model("Weapon")
const seedData = require('./lizardmen.json')
// mongoose.connect("mongodb://localhost/lizardmen")

let allunits  = []
let allweapons = []

seedData.all.forEach((unit, i) => {
  let unitID = new mongoose.Types.ObjectId()

  allunits.push(new Unit({
      "_id": unitID,
      rank: unit.rank,
      race: unit.race,
      name: unit.name,
      url_name: unit.url_name,
      wounds: unit.wounds,
      movement: unit.movement,
      bravery: unit.bravery,
      ssave: unit.save,
      weapons: []
    })
  )

  unit.weapons.forEach((weapon, idx) => {
    let wid = new mongoose.Types.ObjectId()
    allweapons.push(new Weapon(
      {
        "_id": wid,
        name: weapon.name,
        url_name: weapon.url_name,
        combat_type: weapon.type,
        range: weapon.range,
        attacks: weapon.attacks,
        to_hit: weapon.to_hit,
        to_wound: weapon.to_wound,
        damage: weapon.damage,
        unit_id: unitID
      })
    )
    allunits[i].weapons.push(wid)
  })
})

console.log('Primed')

let Units = mongoose.model("Unit")
let Weapons = mongoose.model("Weapon")

mongoose.connect('mongodb://localhost/lizardmen')
Units.remove({}).then(() => {
  allunits.forEach((unit)=>{
    Unit.collection.insert(unit)
  }).then(() => {
      console.log('Unit Seeds Inserted')
  })
})
Weapons.remove({}).then(() => {
  allweapons.forEach((weapon)=>{
    Weapons.collection.insert(weapon)
  }).then(() => {
      console.log('Weapon Seeds Inserted')
  })
})
// process.exit()