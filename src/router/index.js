import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

// 动态读取 modules 中文件
let configRouters = []
const modulesFiles = require.context('./modules', true, /\.js$/)
modulesFiles.keys().forEach((key) => {
  const temRouters = modulesFiles(key).default
  configRouters = configRouters.concat(temRouters)
})
store.commit('tabs/COMMIT_ROUTES', configRouters)

const constantRoutes = [...configRouters]

// 路由跳转抛出异常
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

const createRouter = () =>
  new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
