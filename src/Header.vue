<template>
	<div class="carousel-view">
		<transition-group class="carousel" tag="div">
			<div 
				v-for="slide in slides"
				class="slide"
				:key="slide.id">

				<h4>{{slide.title}}</h4>
			</div>
		</transition-group>
		<div class="carousel-controls">
			<button class="carousel-controls_button" @click="last">{{left}}</button>
			<button class="carousel-controls_button" @click="next">{{right}}</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: "header",
		data(){
			return {
				slides: [
				{
					title: "I'm a Slide One",
					id: 11
				},{
					title: "I'm a Slide Two",
					id: 22
				},{
					title: "I'm a Slide You See First",
					id: 33
				},{
					title: "I'm a Slide Four",
					id: 44
				},{
					title: "I'm a Slide Five",
					id: 55
				}
				],
				left: "<",
				right: ">"
			}
		},
		methods: {
			next () {
				const first = this.slides.shift()
				this.slides = this.slides.concat(first)
			},
			last () {
				const last = this.slides.pop()
				this.slides = [last].concat(this.slides)
			}
		}
	}
</script>


<style>
	.carousel-view{
		display: flex;
		flex-direction: column;
		align-items: center;
		height:100px;
	}
	.carousel{
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		width: 24em;
	}
	.slide{
		flex: 0 0 20em;
		height: 20em;
		margin: 1em ;
		
		display: flex;
		justify-content: center;
		align-items: center;

		transition: transform 0.8s ease-in-out;
	}
	.slide:first-of-type{
		opacity: 0;
	}
	.slide:last-of-type{
		opacity: 0;
	}
</style>