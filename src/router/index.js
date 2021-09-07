'use strict'

import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './../components/home'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})
