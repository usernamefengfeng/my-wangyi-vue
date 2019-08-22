/* 
  管理user的相关状态数据的vuex模块
*/
import {
  RECEIVE_USER,
  RESET_USER,
} from '../mutations-types'

const state = {
  user: localStorage.getItem('user_key') || {},   //登录用户的信息

}
const actions = {
  //保存user的同步action
  saveUser ({commit},user) {
    commit(RECEIVE_USER,{user})
  },

}
const mutations = {
  [RECEIVE_USER] (state,{user}) {
    state.user = user
    localStorage.setItem('user_key', user)
  },
  [RESET_USER] (state) {
    state.user = {}
  },
}
const getters = {}

export default {
  state,
  actions,
  mutations,
  getters
}