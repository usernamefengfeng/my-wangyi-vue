import {
  GET_HOME_DATA,
  GET_SEARCH_DATA,
  GET_SEARCH_RESULT,
} from './mutations-types'

import {
  reqHomeData,
  reqSearchKeyWords,
  reqSearchResult
} from '../../../api/index'

export default{
  //home界面数据
  async getHomeData ({commit}) {
    const result = await reqHomeData()  //ajax请求
    const homeData = result.data
    
    if (result.code === 0) {
      commit(GET_HOME_DATA,{homeData})  //调用mutations直接更新数据
    }
  },

  //搜索关键字
  async getSearchData ({commit}) {
    const result = await reqSearchKeyWords()
    const searchData = result.data

    if (result.code === 0) {
      commit(GET_SEARCH_DATA,{searchData})
    }
  },

  //搜索结果
  async getSearchResult ({commit},keyword) {
    const result = await reqSearchResult(keyword)
    const searchResult = result.data

    if (result.code === 0) {
      commit(GET_SEARCH_RESULT,{searchResult})
    }
  }

}