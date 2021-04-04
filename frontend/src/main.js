import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { VLazyImagePlugin } from "v-lazy-image";

Vue.use(VLazyImagePlugin);

Vue.config.productionTip = false

new Vue({
    router,
    render: function(h) { return h(App) }
}).$mount('#app')