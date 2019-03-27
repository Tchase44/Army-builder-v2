<template>
	<div class="carousel-view">
		<transition-group class="carousel" tag="div">
			<div
				v-for="slide in slides"
				class="slide"
				:key="slide.id">

				<!-- <h4>{{slide.title}}</h4> -->
				<img :src="slide.image">
			</div>
		</transition-group>
		<div class="carousel-controls">
			<button class="carousel-controls_button" @click="last">{{left}}</button>
			<button class="carousel-controls_button" @click="next">{{right}}</button>
		</div>
	</div>
</template>

<script>
  /********************************************************************************************************************
  ** SCRIPT
  ********************************************************************************************************************/
	export default {
		name: "header",
		data(){
			return {
				slides: [
				{
					title: "I'm a Slide One",
					id: 11,
					image: "https://eternalhunt.files.wordpress.com/2013/08/lizardman-release-2.jpg"
				},{
					title: "I'm a Slide Two",
					id: 22,
					image: "https://s-media-cache-ak0.pinimg.com/originals/05/75/75/057575b0a3cf8f2403a7835c559cd687.jpg"
				},{
					title: "I'm a Slide You See First",
					id: 33,
					image: "https://i.redd.it/pe8oa65xc34z.png"
				},{
					title: "I'm a Slide Four",
					id: 44,
					image: "https://i.pinimg.com/736x/b8/eb/64/b8eb64805b27e01fc35cdd6aeb5e34e3--lizardmen-warhammer-warhammer-fantasy.jpg"
				},{
					title: "I'm a Slide Five",
					id: 55,
					image: "http://2.bp.blogspot.com/-UXhbP_BkN9Q/Vp0t0yQBXiI/AAAAAAAAJFY/16yeb8rLCxI/s1600/seraphon8.jpg"
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
			},
			autoNext () {
				setInterval(()=>{this.next()},5000)
			}
    },
    created() {
      this.autoNext()
    }
	}
</script>


<style scoped>
/**********************************************************************************************************************
** STYLES
**********************************************************************************************************************/
	.carousel-view{
		display: flex;
		flex-direction: column;
		align-items: center;
		height:300px;
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
	img{
		width: 100%;
	}
  .carousel-controls_button{
    font-size: 150%;
  }
</style>