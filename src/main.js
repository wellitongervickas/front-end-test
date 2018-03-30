/**
  * Vue Project
  *
  * The style guide of this project is Airbnb
  * -> https://github.com/airbnb/javascript
  *
  * Documentation of third party
  * Docs for Vue: https://vuejs.org/
  * Docs for VueRouter: https://router.vuejs.org/en/
  * Docs for VueAxios: https://github.com/imcvampire/vue-axios
  *
*/

import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

// External js
import routes from './models/helpers/router-helper'
import stores from './stores/store'

// External css
import 'normalize.css/normalize.css'
import './assets/styles/main.scss'

/**
  * Vue Project Uses
  *
*/

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

/**
  * Router Configuration
  *
*/

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes,
})

/**
  * Initialize Vue Framework
  *
*/

const app = new Vue({
  router,
  stores
}).$mount('#app')
