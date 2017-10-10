<template>
	<main>
		<h1>Lizardmen Vue</h1>
		<h2>{{apiArmy[0].heroes[0].name}}</h2>
		<div>
			<div v-on:click="changeShow(heroes)" >Heroes</div>
			<div v-on:click="changeShow(leaders)" >Leaders</div>
			<div v-on:click="changeShow(basic)" >Units</div>
		</div>
		<div v-for="person in current">
			<h3>{{person.name}}</h3>
			<p>Health: {{person.wounds}}</p>
			<p>Movement(inches): {{person.movement}}</p>
			<p>Bravery: {{person.bravery}}</p>
			<p>Save: {{person.save}}</p>
			<h4>Weapons</h4>
			<div v-for="weapons in person.weapons">
				<h5>{{weapons.name}}</h5>
				<p>Damage: {{weapons.damage}}</p>
				<p>Range: {{weapons.range}}</p>
			</div>
		</div>	
	</main>
	
</template>

<script>
	import army from "./assets/lizardmen"
	import axios from "axios"
	export default {
		name: "units",
		data() {
			return {
				apiArmy: null,
				heroes: army.heroes,
				leaders: army.leaders,
				basic: army.basic,
				current: null,
				errors: []
			}
		},

		created() {
			axios.get(`http://localhost:8000/api/lizardmen.json`)
			.then(response => {
				this.apiArmy = response.data
			})
			.catch(e => {
				this.errors.push(e)
			})
		},
		// ready: function(){
		// 	this.getArmy()
		// },

		methods:{
			changeShow(value){
				this.current = value
			}
			// getArmy(){
				
			// }

		}

	}
</script>

<style scoped>
	
</style>