import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Units from './Units.vue'
import Show from './Show.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Units, name: "home"},
  {path: "/:url_name", component: Show, props: true}
]
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})