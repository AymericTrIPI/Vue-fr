import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Contact from '../components/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Home
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  }
]

const router = new VueRouter({
  routes
})

export default router
