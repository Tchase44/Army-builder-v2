const mongoose = require('mongoose')
const Unit = mongoose.model("Unit")
const Weapon = mongoose.model("Weapon")
const Army = mongoose.model("Army")
const seedData = require('./lizardmen.json')
// mongoose.connect("mongodb://localhost/lizardmen")
mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost/lizardmen", {
    useMongoClient: true,
    promiseLibrary: global.Promise
});

database.on('error', error => console.log(`Connection to BudgetManager database failed: ${error}`));
database.on('connected', () => console.log(`Connected to BudgetManager database`));
database.on('disconnected', () => console.log(`Disconnected from BudgetManager database`));

process.on('SIGINT', () => {
    database.close(() => {
        console.log(`BudgetManager terminated, connection closed`)
        process.exit(0)
    })
});
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
        rank: hero,
        name: unit.name,
        wounds: unit.wounds,
        movement: unit.movement,
        bravery: unit.bravery,
        save: unit.save,
        weapons: stuff
        })
    )

})

seedData.leaders.weapons.forEach((weapon,idx)=>{
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
        rank: leader,
        name: unit.name,
        wounds: unit.wounds,
        movement: unit.movement,
        bravery: unit.bravery,
        save: unit.save,
        weapons: stuff
    })
    )
})

seedData.basic.weapons.forEach((weapon,idx)=>{
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
        rank: basic,
        name: unit.name,
        wounds: unit.wounds,
        movement: unit.movement,
        bravery: unit.bravery,
        save: unit.save,
        weapons: stuff
    })
    )
})
 

Army.remove({}).then(() => {
    Army.collection.insert(units).then(() => {
        console.log('Seeds Inserted')
        process.exit()
    })
})