<template>
  <div class="show">
    <h3>{{name}}</h3>
    <div></div>
  </div>
</template>

<script>
	import army from "./assets/lizardmen"
export default {
  name: "Show",
  props:['name'],
  data (){
    return {
    }
  },
  created:{
    // findUnit() {
    //   army.forEach( (arrayOfUnits)=> {
    //     arrayOfUnits.filter( (unitObj) => {
    //       return unitObj.name === this.title
    //     })
    //   })
    // }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
