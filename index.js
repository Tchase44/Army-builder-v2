const express = require("express")
const mongoose = require("./db/connection.js")

let app = express()

let Army = mongoose.model("Army")

app.set("port", process.env.PORT || 8000 )

// app.use("/assets",express.static("src"))

app.get("/api/Lizardmen", (req,res)=>{
	Army.find({}).then(function (data) {
		res.json(data)
	})
})

// app.get("/*", (req, res)=>{
//   res.sendFile(__dirname + "/src/index.html");
// });

app.listen(app.get("port"),function(){
	console.log("Lord Korak awaits on port 8000")
})