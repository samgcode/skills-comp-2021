import Vue from 'vue'
import { VLazyImagePlugin } from "v-lazy-image"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'
import './index.css'

library.add(faEdit)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VLazyImagePlugin);

Vue.config.productionTip = false

new Vue({
    router,
    render: function(h) { return h(App) }
}).$mount('#app')