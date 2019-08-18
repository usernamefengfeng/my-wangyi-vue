/* 
  路由器
*/
import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

// 声明使用Vue插件
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',  //没有#
  routes  //应用中所有路由
})

export default router