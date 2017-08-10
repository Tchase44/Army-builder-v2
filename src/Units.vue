<template>
	<main>
		<h1>Lizardmen Vue</h1>
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
	export default {
		name: "units",
		data() {
			return {
				heroes: army.heroes,
				leaders: army.leaders,
				basic: army.basic,
				current: null
			}
		},
		methods:{
			changeShow(value){
				this.current = value
			}
		}

	}
</script>

<style scoped>
	
</style>