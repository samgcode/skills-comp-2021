import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home/Home'
import Store from '../components/Store/Store'
import Contact from '../components/Contact/Contact'
import About from '../components/About/About'
import ReviewForm from '../components/ReviewForm/ReviewForm'

Vue.use(VueRouter)

const routes = [{
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
    }, {
        path: '/ReviewForm/:item',
        name: 'ReviewForm',
        component: ReviewForm,
        props: true
    }, {
        path: '/*',
        redirect: { name: 'route-name' }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router