import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Index from './Index.vue'
import Show from './Show.vue'
import Edit from './Edit.vue'
import New from './New.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Index, name: "home"},
  {path: "/:url_name", component: Show, props: true},
  {path: "/:url_name/edit", component: Edit},
  {path: "/:url_name/new", component: New}
]
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})