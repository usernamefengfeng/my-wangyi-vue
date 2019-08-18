/* 
  入口文件
*/
import Vue from 'vue'

import App from './App.vue'
import router from './router/index'

import Footer from './components/Footer/Footer.vue'
import Split from './components/Split/Split.vue'
Vue.component('Footer',Footer)
Vue.component('Split',Split)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,  //挂载路由器
}).$mount('#app')
