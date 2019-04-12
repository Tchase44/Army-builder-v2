<template>
<div>
  <form action="" method="post">
    {{unit}}
    <label for="name">Name</label>
    <input
      type="text"
      name="name"
      v-model.trim="name"
      :placeholder="unit.name">

    <label for="move">Movement in inches</label>
    <input
      type="text"
      name="move"
      v-model.trim="movement"
      :placeholder="unit.movement">

    <label for="brave">Bravery</label>
    <input
      type="text"
      name="brave"
      v-model.trim="bravery"
      :placeholder="unit.bravery">

    <label for="wounds">Wounds</label>
    <input
      type="text"
      name="wounds"
      v-model.trim="wounds"
      :placeholder="unit.wounds">

    <label for="ssave">Save</label>
    <input
      type="text"
      name="ssave"
      v-model.trim="ssave"
      :placeholder="unit.ssave">

  <button id="update-unit-btn" @click="submitClick($event)">Update</button>
  </form>
</div>
</template>

<script>
import axios from "axios"
import voca from "voca"

export default {
  name: "unit-form",
  props:{
    unit:{
      type: Object
    }
  },
  data(){
    return {
      name: unit.name,
      url_name: unit.url_name,
      wounds: unit.wounds,
      movement: unit.movement,
      bravery: unit.bravery,
      ssave: unit.ssave
    }
  },
  methods:{
    submitClick(event){
      event.preventDefault()

      let updateInfo = {
        name: this.nameChanges(),
        wounds: this.woundsChanges(),
        movement: this.movementChanges(),
        bravery: this.braveryChanges(),
        ssave: this.ssaveChanges()
      }
      console.log(this.unit)
      console.log(this.$props)
      console.log(updateInfo)
      // this.updateUnit(updateInfo)
      this.$router.go()
    },
    updateUnit(newData){
      axios({
        method:"post",
        url: `http://localhost:8001/api/lizardmen/${this.$params_name}/update`,
        data: newData
      })
      .then(response => {console.log(response)})
      .catch(e => {this.errors.push(e)})
    },
    changes(){
      let name = this.name
      let url_name = newName
      let wounds = this.wounds
      let movement = this.movement
      let bravery = this.bravery
      let ssave = this.ssave
    },
    nameChanges(){
      return ( this.name !== "" &&  this.name !== this.unit.name ? this.name : this.unit.name )
    },
    woundsChanges(){
      return ( this.wounds !== "" &&  this.wounds !== this.unit.wounds ? this.wounds : this.unit.wounds )
    },
    movementChanges(){
      return ( this.movement !== "" &&  this.movement !== this.unit.movement ? this.movement : this.unit.movement )
    },
    braveryChanges(){
      return ( this.bravery !== "" &&  this.bravery !== this.unit.bravery ? this.bravery : this.unit.bravery )
    },
    ssaveChanges(){
      return ( this.ssave !== "" &&  this.ssave !== this.unit.ssave ? this.ssave : this.unit.ssave )
    },
    url_nameChanges(){
      return ( this.name !== "" &&  this.name !== this.unit.name ? voca.snakeCase(this.name) : this.unit.url_name )
    }
  }
}
</script>

<style>

</style>
