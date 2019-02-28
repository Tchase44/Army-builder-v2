<template>
  <div class="big-title">
    <h1><router-link to="/" v-bind:msg="msg">Lizardmen</router-link></h1>
  </div>
</template>

<script>
	export default {
		name: "bigtitle",
		data() {
			return {
        msg: "a title"
			}
		}
	}
</script>


<style scoped>
  .big-title {
    width: 100%;
    text-align: center;
  }

  h1, a {
    text-decoration: none;
    color: #000;
  }
</style>