let mongoose = require('mongoose')
const Army = require('./models/army');

mongoose.connect("mongodb://localhost/lizardmen2")

module.exports = mongoose

