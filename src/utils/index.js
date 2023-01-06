import Vue from 'vue'
import bus from './bus'
import Storage from './storage'
import { isEmpty } from './validate'

Vue.use(Storage)
Vue.use(bus)

Vue.prototype.$isEmpty = isEmpty
