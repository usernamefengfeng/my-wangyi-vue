/* 
  入口文件
*/
import Vue from 'vue'
import 'lib-flexible/flexible'  //移动端适配

import App from './App.vue'
import router from './router/index' //路由器
import store from './store/index'   //vuex最核心的管理对象
import './api/index'   //请求接口
import './mock/mock_serve'  //mock接口

//将组件挂载到全局应用
import Footer from './components/Footer/Footer.vue'
import Split from './components/Split/Split.vue'

//注册全局组件
Vue.component('Footer',Footer)
Vue.component('Split',Split)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,  //挂载路由器
  store,   //vuex最核心的管理对象
}).$mount('#app')
