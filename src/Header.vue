<template>
	<div>
		<transition-group class="carousel" tag="div">
			<div 
				v-for="slide in slides"
				class="slide"
				:key="slide.id">

				<h4>{{slide.title}}</h4>
			</div>
		</transition-group>
		<div class="carousel-controls">
			<button class="carousel-controls_button" @click="next">Next</button>
			<button class="carousel-controls_button" @click="last">Last</button>
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
					title: "I'm a Slide Three",
					id: 33
				},{
					title: "I'm a Slide Four",
					id: 44
				},{
					title: "I'm a Slide Five",
					id: 55
				}
				]
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


<style scoped></style>