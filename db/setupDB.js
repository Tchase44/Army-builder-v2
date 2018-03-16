const mongoose = require('mongoose'),
      weaponImport = require('./models/weapon'),
      unitImport = require('./models/unit'),
      armyImport = require('./models/army');
const Unit = mongoose.model("Unit")
const ArmyModel = mongoose.model("Army")
const Weapon = mongoose.model("Weapon")
const seedData = require('./lizardmen.json')
// mongoose.connect("mongodb://localhost/lizardmen")

let units  = []
seedData.heroes.forEach((unit,idx) => {
    let stuff = []
    unit.weapons.forEach((weapon, idx) => {
        stuff.push(new Weapon({
            name: weapon.name,
            combat_type: weapon.combat_type,
            range: weapon.range,
            attacks: weapon.attacks,
            to_hit: weapon.to_hit,
            to_wound: weapon.to_wound,
            damage: weapon.damage
            })
        )
    })
    units.push(new Unit({
        rank: 'hero',
        name: unit.name,
        wounds: unit.wounds,
        movement: unit.movement,
        bravery: unit.bravery,
        save: unit.save,
        weapons: stuff
        })
    )

})

seedData.leaders.forEach((unit,idx)=>{
    let officerWeapons = []
    unit.weapons.forEach((weapon, idx) => {
        officerWeapons.push(new Weapon({
            name: weapon.name,
            combat_type: weapon.combat_type,
            range: weapon.range,
            attacks: weapon.attacks,
            to_hit: weapon.to_hit,
            to_wound: weapon.to_wound,
            damage: weapon.damage
        })
        )
    })
    units.push(new Unit({
        rank: 'leader',
        name: unit.name,
        wounds: unit.wounds,
        movement: unit.movement,
        bravery: unit.bravery,
        save: unit.save,
        weapons: officerWeapons
    })
    )
})

seedData.basic.forEach((unit,idx)=>{
    let infantryWeapons = []
    unit.weapons.forEach((weapon, idx) => {
        infantryWeapons.push(new Weapon({
            name: weapon.name,
            combat_type: weapon.combat_type,
            range: weapon.range,
            attacks: weapon.attacks,
            to_hit: weapon.to_hit,
            to_wound: weapon.to_wound,
            damage: weapon.damage
        })
        )
    })
    units.push(new Unit({
        rank: 'basic',
        name: unit.name,
        wounds: unit.wounds,
        movement: unit.movement,
        bravery: unit.bravery,
        save: unit.save,
        weapons: infantryWeapons
    })
    )
})
let Army = new ArmyModel({
    name: "Lizardmen"
})
mongoose.connect('mongodb://localhost/lizardmen2')
Army.remove({}).then(() => {
    units.forEach((unit)=>{
        Army.collection.insert(unit)
    }).then(() => {
        console.log('Seeds Inserted')
        process.exit()
    })
})