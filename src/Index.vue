<template>
	<main class="main">
		<div>
			<div @click="changeShow(all)" >All</div>
			<div @click="changeShow(heroes)" >Heroes</div>
			<div @click="changeShow(leaders)" >Leaders</div>
			<div @click="changeShow(basic)" >Units</div>
		</div>
		<div class="contain">
		<div v-for="person in current"
				 class="boxes"
				 :key="person.name" >
			<div class="model">
				<router-link :to="{ path: person.url_name }" v-bind:name="person.url_name">
					<h3>{{person.name}}</h3>
					<p>Health: {{person.wounds}}</p>
					<p>Movement(inches): {{person.movement}}</p>
					<p>Bravery: {{person.bravery}}</p>
					<p>Save: {{person.ssave}}</p>
				</router-link>
			</div>
		</div>
		</div>
	</main>
</template>

<script>
	// import army from "./assets/lizardmen"
	import axios from "axios"

	export default {
		name: "units",
		data() {
			return {
				apiArmy: null,
				heroes: null,
				leaders: null,
				basic: null,
				all: null,
				current: null,
				errors: []
			}
		},
		created() {
			axios.get(`http://localhost:8001/api/lizardmen`)
			.then(response => {
				this.apiArmy = response.data
				this.heroes = []
				this.leaders = []
				this.basic = []
				this.all = this.apiArmy
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