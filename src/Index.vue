<template>
	<main class="main">
		<div class="title-bar">
			<div @click="changeShow(all)"
        class="nav-item">All</div>
			<div @click="changeShow(heroes)"
        class="nav-item">Heroes</div>
			<div @click="changeShow(leaders)"
        class="nav-item">Leaders</div>
			<div @click="changeShow(basic)"
        class="nav-item">Infantry</div>
		</div>
		<div class="contain">
		<div v-for="person in current"
				 class="boxes card"
				 :key="person.name" >
			<div class="model card-section">
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
  /********************************************************************************************************************
  ** SCRIPT
  ********************************************************************************************************************/
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
						case "General":
							this.heroes.push(unit)
							break;
						case "leader":
							this.leaders.push(unit)
							break;
						case "infantry":
							this.basic.push(unit)
							break;
					}
        });
        this.current = this.all
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
/**********************************************************************************************************************
** STYLES
**********************************************************************************************************************/
	main{
    box-sizing: border-box;
    width: 100%;
    padding: 5px;
  }

  .nav-item{
    width: 20%;
    margin-left: 1%;
    text-align: center;
    cursor: pointer;
  }
  .nav-item:hover{
    background-color: rgb(46, 53, 49);
  }

	a{
		text-decoration: none;
		color: #000;
	}
	.contain{
		width: 100%;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 20px;
	}
	.boxes{
    min-width: 195px;
  }

  @media only screen and (min-width: 500px){
    .contain{
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media only screen and (min-width: 906px){
    .contain{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media only screen and (min-width: 1250px){
    .contain{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
</style>