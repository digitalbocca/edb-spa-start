'use strict'

import { createApp } from 'vue'

import App from './../components/app'
import store from './../store'
import router from './../router'

const app = createApp(App)

app.config.productionTip = false

app.use(store)
app.use(router)

app.mount('#app')
