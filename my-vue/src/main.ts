import Vue from 'vue'
/* 模板 */
import App from './App.vue'
/* 路由 */
import router from './router'
/* 仓库 */
import store from './store'
/* 全局css */
import "./main.less"

/* 
 * 禁止启用生产消息
 * [productionTip] false：禁止；true：启用
*/
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
