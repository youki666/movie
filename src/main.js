import Vue from 'vue'
import App from './app.vue'
import store from './store/store'

import Fly from 'flyio/dist/npm/wx'
let fly = new Fly
Vue.prototype.$fly = fly
Vue.prototype.$store = store
const app = new Vue(App)

app.$mount()
