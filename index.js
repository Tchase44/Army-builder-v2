const express = require("express")
// const mongoose = require('mongoose')
const mongoose = require("./db/connection.js")
// const mongoose = require("./db/setupDB")
// mongoose.connect("mongodb://localhost/lizardmen2")

let app = express()

// let Army = mongoose.model("Army")
let Unit = mongoose.model("Unit")
let Weapon = mongoose.model("Weapon")
let DamageTable = mongoose.model("DamageTable")


app.set("port", process.env.PORT || 8001 )

// app.use("/assets",express.static("src"))

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

// Units
app.get("/api/lizardmen", (req,res)=>{
	Unit.find({}).then(function (data) {
		res.json(data)
	})
})

// app.get("/api/lizardmen/:url_name.json", (req,res)=>{
// 	Unit.findOne({url_name: req.params.url_name}).then(function (data) {
//     res.json(data)
// 	})
// })
app.get("/api/lizardmen/:url_name", (req,res)=>{
	Unit.findOne({url_name: req.params.url_name}).then(function (data) {
    Weapon.find({unit_id: data._id}).then(function(wdata){
      DamageTable.findOne({unit_name: req.params.url_name}).then(function(dt){
        data.weapons = wdata
        res.json(data)
      })
    });
	})
})

//damagetable
app.get("/api/lizardmen/damage_table/:url_name", (req,res)=>{
	DamageTable.findOne({unit_name: req.params.url_name}).then(function (data) {
		res.json(data)
	})
})

// Ranks
app.get("/api/lizardmen/rank/:rank", (req,res)=>{
	Unit.find({rank: req.params.rank}).then(function (data) {
		res.json(data)
	})
})

// Weapaons
app.get("/api/lizardmen/weapons", (req,res)=>{
	Weapon.find({}).then(function (data) {
		res.json(data)
	})
})
app.get("/api/lizardmen/weapons/:url_name", (req,res)=>{
	Weapon.findOne({url_name: req.params.url_name}).then(function (data) {
		res.json(data)
	})
})

// app.get("/*", (req, res)=>{
//   res.sendFile(__dirname + "/index.html");
// });

app.listen(app.get("port"),function(){
	console.log("Lord Korak awaits on port 8001")
})