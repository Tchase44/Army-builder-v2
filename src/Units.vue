<template>
	<main class="main">
		<h1>Lizardmen Vue</h1>
		<!-- <h2>{{apiArmy[0].heroes[0].name}}</h2> -->
		<div>
			<div v-on:click="changeShow(heroes)" >Heroes</div>
			<div v-on:click="changeShow(leaders)" >Leaders</div>
			<div v-on:click="changeShow(basic)" >Units</div>
		</div>
		<div class="contain">
		<div v-for="person in current" class="boxes" :key="person.name" >
			<div class="model">
				<router-link :to="{ path: person.name }" v-bind:name="person.name">
					<h3>{{person.name}}</h3>
					<p>Health: {{person.wounds}}</p>
					<p>Movement(inches): {{person.movement}}</p>
					<p>Bravery: {{person.bravery}}</p>
					<p>Save: {{person.save}}</p>
					<h4>Weapons</h4>
					<div v-for="weapon in person.weapons" v-bind:key="weapon._id">
						<h5>{{weapon.name}}</h5>
						<p>Damage: {{weapon.damage}}</p>
						<p>Range: {{weapon.range}}</p>
					</div>
				</router-link>
			</div>
		</div>
		</div>	
	</main>
</template>

<script>
	// import army from "./assets/lizardmen"
	import axios from "axios"
	import voca from "voca"
	export default {
		name: "units",
		data() {
			return {
				apiArmy: null,
				heroes: [],
				leaders: [],
				basic: [],
				all: [].concat(heroes,leaders,basic),
				current: null,
				errors: []
			}
		},
		created() {
			axios.get(`http://localhost:8000/api/lizardmen.json`)
			.then(response => {
				this.apiArmy = response.data
				this.apiArmy.forEach(unit => {
					switch (unit.rank) {
						case "hero":
							this.heroes.push(unit)
							break;
						case "leader":
							this.leaders.push(unit)
							break;
						case "basic":
							this.basic.push(unit)
							break;
					}
				});
			})
			.catch(e => {
				this.errors.push(e)
			})
		},
		methods:{
			changeShow(value){
				this.current = value
			},
			
			urlSafe(value){
				let pathname = voca.slugify(value)
				return `/${pathname}`
			}
		}
	}
</script>

<style scoped>
	main{
		text-align: center;
	}
	a{
		text-decoration: none;
		color: #000;
	}
	.contain{
		width: 100%;
		padding: 0;
	}
	.boxes{
		text-align: center;
		border:1px solid black;
		display: inline-block;
		margin: 5px;
		padding: 2px;
		vertical-align: top;
	}
</style>