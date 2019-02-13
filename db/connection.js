let mongoose = require('mongoose')
const Army = require('./models/army');
const Unit = require('./models/unit');

mongoose.connect("mongodb://localhost/lizardmen2")

module.exports = mongoose

