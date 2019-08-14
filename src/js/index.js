'use strict'

import Vue from 'vue'

import App from './../components/app'
import store from './../store'
import router from './../router'

Vue.config.productionTip = false

window.vm = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
