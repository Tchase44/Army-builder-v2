<template>
	<main>
		<h1>Lizardmen Vue</h1>
		<div>
			<div v-on:click="" >Heroes</div>
			<div v-on:click="" >Leaders</div>
			<div v-on:click="" >Units</div>
		</div>
		<div v-show="false" v-for="person in heroes">
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
			}
		}
	}
</script>

<style scoped>
	
</style>