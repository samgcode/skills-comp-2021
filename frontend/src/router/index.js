import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home/Home'
import Store from '../components/Store/Store'
import Contact from '../components/Contact/Contact'
import About from '../components/About/About'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/Store',
    name: 'Store',
    component: Store
  }, {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  }, {
    path: '/About',
    name: 'About',
    component: About
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/About.vue')
  //   }
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
