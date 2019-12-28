import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import service from "./http"
import Vant from 'vant';
import 'vant/lib/index.css'
import BScroll from 'better-scroll'
import FastClick from 'fastclick'

FastClick.attach(document.body);
var BScroll = require('better-scroll')
Vue.use(Vant);
Vue.prototype.$axios = service
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')