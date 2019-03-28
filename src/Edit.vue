<template>
	<main class="main">
		<form action="" method="post">
      <label for="name">Name</label>
      <input
        type="text"
        name="name"
        v-model.trim="unit"
        placeholder="{{}}">

      <label for="move">Movement in inches</label>
      <input
        type="text"
        name="move"
        v-model.trim="unit"
        placeholder="{{}}">

      <label for="brave">Bravery</label>
      <input
        type="text"
        name="brave"
        v-model.trim="unit"
        placeholder="{{}}">

      <label for="wounds">Wounds</label>
      <input
        type="text"
        name="wounds"
        v-model.trim="unit"
        placeholder="{{}}">

      <label for="ssave">Save</label>
      <input
        type="text"
        name="ssave"
        v-model.trim="unit"
        placeholder="{{}}">
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
    props: {
      unit: {
        type: Object
      }
    },
// props: {
//   quote: {
//     type: String,
//     required: true,
//     validator: function (value) {
//       return ["",].indexOf(value) !== -1
//     }
//   }
// }
		data() {
			return {

				errors: []
			}
		},
		created() {
    },
		methods:{
      updateUnit(){
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