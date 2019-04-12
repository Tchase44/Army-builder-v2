const express = require("express")
// const mongoose = require('mongoose')
const mongoose = require("./db/connection.js")
// const mongoose = require("./db/setupDB")
// mongoose.connect("mongodb://localhost/lizardmen2")
const parser = require("body-parser")

let app = express()

// let Army = mongoose.model("Army")
let Unit = mongoose.model("Unit")
let Weapon = mongoose.model("Weapon")
let DamageTable = mongoose.model("DamageTable")


app.set("port", process.env.PORT || 8001 )
app.use(parser.json({extended:true}))
app.use(parser.urlencoded({ extended: true }))
// app.use("/assets",express.static("src"))

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

//* get seleted fields from doc
// User.findById(id)
//     .select("name movement")
//     .exec(function (err, user) {
//       var item = {
//           name: user.name,
//           move: user.movement
//       }
//       res.json(item);
//     })
//* get all fields minus specified
// User.findById(id).select("-move -weapons")


/************
 * API Routes
*************/
// Units
app.get("/api/lizardmen", (req,res)=>{
	Unit.find({}).then(function (data) {
		res.json(data)
	})
})

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

app.put("/api/lizardmen/:url_name/update", (req, res)=>{
	Unit.findOneAndUpdate({url_name: req.params.url_name}, req.body, {new: true})
		.then((unit)=>{
				res.json(unit)
		})
})

// Ranks
app.get("/api/lizardmen/rank/:rank", (req,res)=>{
	Unit.find({rank: req.params.rank}).then(function (data) {
		res.json(data)
	})
})

// Weapons
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

// app.post("/api/lizardmen/new", (req, res)=>{
  // if( req.body.keys != "" ){update}else{fail}
  // if( req.body.move included in vaild move arry ){update}else{fail}
// 	Unit.create(req.body)
// 		.then((newUnit)=>{
// 			console.log(req.body )
// 			res.json(newUnit)
// 		})
// })







// app.get("/*", (req, res)=>{
//   res.sendFile(__dirname + "/index.html");
// });

app.listen(app.get("port"),function(){
	console.log("Lord Korak awaits on port 8001")
})

// add sub doc
// function addItem(resturant, item){
//   Restaurant.findOne({name: resturant}, function(err, docs){
//     docs.items.push(new MenuItem({
//     											title: item
//     										}))
//     docs.save(function(err, results){
//       if(err){
//         console.log(err)
//       }
//       else{
//         console.log(results);
//       }
//     })
//   });
// }

// // Remove sub document
// function removeItem(resturant, item){
//   Restaurant.findOneAndUpdate({name: resturant}, {
//     $pull: { items: {title: item} }
//   },
//   {new: true}, function(err, docs){
//     if(err){
//       console.log(err);
//     }
//     else{
//       console.log(docs);
//     }
//   });
// }