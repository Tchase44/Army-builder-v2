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

			}
		},
		methods: {}
	}
</script>


<style scoped></style>