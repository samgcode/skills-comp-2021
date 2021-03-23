import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vueScrollReveal from 'vue-scroll-reveal'
import './index.css'

const app = createApp(App).use(router, vueScrollReveal).mount('#app')
// app.use(VueScrollReveal)
