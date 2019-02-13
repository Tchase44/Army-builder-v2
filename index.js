const express = require("express")
// const mongoose = require('mongoose')
const mongoose = require("./db/connection.js")
// const mongoose = require("./db/setupDB")
// mongoose.connect("mongodb://localhost/lizardmen2")

let app = express()

let Army = mongoose.model("Army")
let Unit = mongoose.model("Unit")

app.set("port", process.env.PORT || 8000 )

// app.use("/assets",express.static("src"))

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.get("/api/lizardmen.json", (req,res)=>{
	Army.find({}).then(function (data) {
		res.json(data)
	})
})
app.get("/api/lizardmen/:url_name.json", (req,res)=>{
	Unit.findOne({url_name: req.params.url_name}).then(function (data) {
		res.json(data)
	})
})

// app.get("/*", (req, res)=>{
//   res.sendFile(__dirname + "/index.html");
// });

app.listen(app.get("port"),function(){
	console.log("Lord Korak awaits on port 8000")
})