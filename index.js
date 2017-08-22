const express = require("express")
const mongoose = require("mongoose")

const app = express()

let army = mongoose.model("Army")

app.set("port", process.env.PORT || 8000 )

// app.use("/assets",express.static("src"))

app.get("/api/Lizardmen", (req,res)=>{
	army.find({}).then(function (data) {
		res.json(data)
	})
})

app.get("/*", (req, res)=>{
  res.sendFile("./index.html");
});

app.listen(app.get("port"),function(){
	console.log("Lord Korak awaits on port 8000")
})