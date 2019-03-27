<template>
	<main class="main">
		Create a unit
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