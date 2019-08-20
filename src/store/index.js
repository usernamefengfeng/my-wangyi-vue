/* 
  vuex最核心的管理对象--store对象
*/
import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

import home from './modules/home/index'

//声明使用vue插件
Vue.use(Vuex)

export default new Vuex.Store({
  mutations,
  actions,
  getters,
  modules: {  //vuex多模块编程
    home,
  }
})