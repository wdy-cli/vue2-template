import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/index'
import '@/router/filter.js'
import '@/api'
import '@/plugins'

import 'flex.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
