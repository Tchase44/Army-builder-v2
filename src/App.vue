<template>
  <div id="appp">
    <bigtitle></bigtitle>
    <upper></upper>
    <router-view></router-view>
  </div>
</template>

<script>
  /********************************************************************************************************************
  ** SCRIPT
  ********************************************************************************************************************/
import Upper from "./Header.vue"
import bigtitle from "./BigTitle.vue"

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Upper,
    bigtitle
  }
}
</script>

<style>
/**********************************************************************************************************************
** STYLES
**********************************************************************************************************************/
#appp {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
a {
  color: #42b983;
}
</style>
