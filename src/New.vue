<template>
	<main class="main">
		<form action="" method="post">
      <label for="name">Name</label>
      <input
        type="text"
        name="name"
        v-model.trim="name"
        placeholder="OrkCrusher">

      <label for="move">Movement in inches</label>
      <input
        type="text"
        name="move"
        v-model.trim="move"
        placeholder="8">

      <label for="brave">Bravery</label>
      <input
        type="text"
        name="brave"
        v-model.trim="brave"
        placeholder="6">

      <label for="wounds">Wounds</label>
      <input
        type="text"
        name="wounds"
        v-model.trim="wounds"
        placeholder="2">

      <label for="ssave">Save</label>
      <input
        type="text"
        name="ssave"
        v-model.trim="ssave"
        placeholder="3">
    </form>
	</main>
</template>

<script>
  /********************************************************************************************************************
  ** SCRIPT
  ********************************************************************************************************************/
	// import army from "./assets/lizardmen"
	import axios from "axios"

	export default {
		name: "edit",
		data() {
			return {
        name: "",
        move: "",
        brave: "",
        wounds: "",
        ssave: "",
				errors: []
			}
		},
		created() {
    },
		methods:{
			changeShow(value){
				this.current = value
      },
      create(){
      axios.post(`http://localhost:8001/api/lizardmen`)
			  .then(response => {})
			  .catch(e => {this.errors.push(e)})
      }
		}
	}
</script>

<style scoped>
/**********************************************************************************************************************
** STYLES
**********************************************************************************************************************/
	main{
    box-sizing: border-box;
    width: 100%;
    padding: 5px;
  }

</style>