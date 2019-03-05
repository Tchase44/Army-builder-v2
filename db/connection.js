let mongoose = require('mongoose')
const Army = require('./models/army');
const Unit = require('./models/unit');
const DamageTable = require('./models/damageTable');
const Weapon = require('./models/weapon');

mongoose.connect("mongodb://localhost/lizardmen")

module.exports = mongoose

