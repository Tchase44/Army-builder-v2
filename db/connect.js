const mysql = require('mysql');
// const seeddata = require('./lizardmen.json')
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
// unit schema 
// name, rank , wounds ,movement , bravery, save,  ???weapon_ids[foreign key]???
let units = [
["Lord Kroak","hero", "*", "5", "10", "4+"],
["Slann Mage Preist","hero", "7", "5", "10", "4+"],
["Kroq-Gar on Carnosaur","hero", "12", "10", "10", "4+"],
["Prophet of Sotek","hero", "5", "8", "10", "5+"],
["Saurus OldBlood","leader", "7", "5", "10", "4+"],
["Saurus OldBlood on Cold One","leader", "7", "10", "10", "4+"],
["Scar Vetran with Battle Standard","leader", "6", "5", "10", "4+"],
["Saurus Warriors","basic", "1", "5", "10", "5+"],
["Temple Gaurd","basic", "1", "5", "10", "4+"],
["Saurus Calvalry","basic", "2", "7", "10", "5+"],
["Skinks", "6","basic", "5", "10", "4+"]
]
// weapon schema
// name, type, range, attacks, to_hit, to_wound, damage
let weapons = [
["spectral claws", "melee", "3", "2D6", "3+", "3+", "1"],
["Azure Lighting", "melee", "3", "6", "4+", "3+", "1"],
["Sunbolt Guntlent", "missle", "18", "D6", "3+", "4+", "1"],
["Sunstone Spear", "melee", "2", "3", "3+", "4+", "D3"],
["Carnosaur Clawed Forelimbs", "melee", "2", "2", "3+", "3+", "2"],
["Carnosaur Massive Jaws", "melee", "2", "*", "4+", "3+", "3"],
["Tide of Serpents", "missle", "8", "4", "5+", "4+", "1"],
["Blade of the Serpent's Tounge", "melee", "2", "4", "3+", "4+", "1"],
["Suntooth Maul", "melee", "1", "2", "3+", "4+", "D3"],
["Celestite War-Spear", "melee", "2", "4", "4+", "3+", "1"],
["Fearsome Jaws and Stardrake Sheild", "melee", "1", "1", "4+", "3+", "1"],
["Celestite War-Pick", "melee", "1", "3", "3+", "3+", "1"],
["Cold One's Vicious Bite", "melee", "1", "2", "3+", "4+", "1"],
["Fearsome Jaws", "melee", "1", "1", "4+", "4+", "1"],
["Celestite Club", "melee", "1", "1", "4+", "3+", "1"],
["Celestite Spear", "melee", "2", "1", "4+", "4+", "1"],
["Celestite Polearm", "melee", "1", "2", "3+", "3+", "1"],
["Celestite Lance", "melee", "1", "1", "3+", "3+", "1"],
["Meteoric Javelin", "missle", "8", "1", "5+", "4+", "1"],
["Blowgun", "missle", "16", "1", "5+", "5+", "1"],
["Moonstone Club", "melee", "1", "1", "5+", "4+", "1"]
]