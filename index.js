const express = require("express")
const mongoose = require("./db/connection.js")
const expressVue = require("express-vue")
const path = require('path')
// express init
let app = express()
//
const vueOptions = {
	rootPath: path.join(__dirname,''),
	layout:{
		start:'<div id="app">',
		end: '</div>'
	}
}
// express-vue init
const expressVueMiddleware = expressVue.init(vueOptions)
app.use(expressVueMiddleware)

// set up  mongoose/mongo
let Army = mongoose.model("Army")
// port
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

app.get("/*", (req, res)=>{
  res.sendFile(__dirname + "/src/index.html");
});

app.listen(app.get("port"),function(){
	console.log("Lord Korak awaits on port 8000")
})