const mysql = require('mysql');
const seeddata = require('./lizardmen.json')
const dbName = "lizardmen"

const connection = mysql.createConnection({
    port: '3306',
    user: 'root',
    password: 'benderisgreat',
    // database: 'lizardmen'
});
connection.connect(err => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
    connection.query(`CREATE DATABASE ${dbName}`, (err, result) => {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
        console.log(`db ${dbName} created!`)
        connection.end();
    })
})

seedData.heroes.forEach((unit, idx) => {
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

seedData.leaders.forEach((unit, idx) => {
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

seedData.basic.forEach((unit, idx) => {
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
