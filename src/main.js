import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import './style/reset.css'
import './style/common.css'
import '../theme/index.css'
import './style/font/iconfont.css' // 字体图标css
import './style/font/iconfont.js' // 字体图标js
import validateRouter from '@/utils/router-utils'

validateRouter(router)

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
