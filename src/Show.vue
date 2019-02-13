<template>
  <div class="show">
    <h3>url: {{url_name}}</h3>

    <h3>{{name}}</h3>
    <p>Health: {{wounds}}</p>
    <p>Movement(inches): {{movement}}</p>
    <p>Bravery: {{bravery}}</p>
    <p>Save: {{ssave}}</p>

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

</style>
