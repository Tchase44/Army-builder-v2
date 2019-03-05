const mongoose = require('mongoose'),
      unitImport = require('./models/unit'),
      damageImport = require('./models/damageTable')
const Unit = mongoose.model("Unit")
const DamageTable = mongoose.model("DamageTable")




carnisaur = new DamageTable({
  rows:[
    {
      wounds_suffered: "0-2",
      move: "10",
      attack1_name: "Clawed Forelimbs",
      attack1_value: "3+",
      attack2_name: "Massive Jaws",
      attack2_value: "5"
    },
    {
      wounds_suffered: "3-4",
      move: "10",
      attack1_name: "Clawed Forelimbs",
      attack1_value: "4+",
      attack2_name: "Massive Jaws",
      attack2_value: "4"
    },
    {
      wounds_suffered: "5-7",
      move: "8",
      attack1_name: "Clawed Forelimbs",
      attack1_value: "4+",
      attack2_name: "Massive Jaws",
      attack2_value: "3"
    },
    {
      wounds_suffered: "8-9",
      move: "8",
      attack1_name: "Clawed Forelimbs",
      attack1_value: "5+",
      attack2_name: "Massive Jaws",
      attack2_value: "2"
    },
    {
      wounds_suffered: "10+",
      move: "6",
      attack1_name: "Clawed Forelimbs",
      attack1_value: "5+",
      attack2_name: "Massive Jaws",
      attack2_value: "1"
    }
  ],
  unit_id: "",
  unit_name: "Kroq-Gar_on_Carnosaur",
})




console.log('Primed')

let Units = mongoose.model("Unit")
let DamageTables = mongoose.model("DamageTable")


mongoose.connect('mongodb://localhost/lizardmen')
DamageTables.remove({}).then(() => {
  DamageTables.collection.insert(carnisaur)
})
