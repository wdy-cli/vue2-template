const { defineConfig } = require('@vue/cli-service')

const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const proxyHost = 'http://110.42.171.148:8080'
const port = '9527'

module.exports = defineConfig({
  transpileDependencies: true,
  // 生产环境是否构建生成 source map, 可以将其设置为 false 以加速生产环境构建
  productionSourceMap: false,

  configureWebpack: (config) => {
    config.devtool = 'source-map'

    config.externals = {
      vue: 'Vue',
      vuex: 'Vuex',
      'vue-router': 'VueRouter',
      moment: 'moment',
      axios: 'axios'
    }
  },

  // 本地服务的配置
  devServer: {
    port,
    open: true,
    // 设置跨域代理
    proxy: {
      '/api': {
        target: proxyHost,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
