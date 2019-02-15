<template>
  <div class="show">
    <h3>{{name}}</h3>
      <div class="box">
        <div class="health">
          <span class="stat">Health:</span><br>
          <span class="value">{{wounds}}</span>
        </div>
        <div class="move">
          <span class="stat">Movement:</span><br>
          <span class="value">{{movement}} in</span>
        </div>
        <div class="brave">
          <span class="stat">Bravery:</span><br>
          <span class="value">{{bravery}}</span>
        </div>
        <div class="ssave">
          <span class="stat">Save:</span><br>
          <span class="value">{{ssave}}</span>
        </div>
      </div>

    <h4>Weapons</h4>
    <div v-for="weapon in unit.weapons" v-bind:key="weapon.url_name">
      <p>{{weapon.name}}</p>
    </div>

    <h4>Errors</h4>
    <div>{{errors}}</div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "Show",
  props:['url_name'],
  data (){
    return {
      unit: {},
      name: "",
      wounds: "",
      movement: "",
      bravery: "",
      ssave: "",
      params_name: this.$props.url_name,
      errors: []
    }
  },
	mounted() {
    axios.get(`http://localhost:8000/api/lizardmen/${this.params_name}.json`).then(res => {
      this.unit = res.data
      let unit = res.data
      this.name = unit.name
      this.wounds = unit.wounds
      this.movement = unit.movement
      this.bravery = unit.bravery
      this.ssave = unit.ssave
      // this.something = props.url_name
      console.log(this.unit)
    })
  },
  // watch:{
  //   url_name: function(val){
  //     axios.get(`http://localhost:8000/api/lizardmen/${url_name}.json`).then(res => {
  //       this.unit = res.data
  //     })
  //     .catch(e => {
  //       this.errors.push(e)
  //     })
  //   }
  // },
  // computed:{
  //   getProps(){
  //     return this.$props
  //   }
  // },
  methods: {
  }
}
</script>

<style scoped>
div{
  display: inline-block;
}

.stat{
  font-weight: bolder;
}

.value{
  font-size: 120%;
}

.box{
  display: grid;
  width: 200px;
  height: 150px;
  border: 1px solid #000;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
}
.box div{
  border: 1px solid #000;
  text-align: center;
}
</style>
