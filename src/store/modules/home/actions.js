import {
  GET_HOME_DATA,
} from './mutations-types'

import {
  reqHomeData,
} from '../../../api/index'

export default{
  async getHomeData ({commit}) {
    const result = await reqHomeData()  //ajax请求
    const homeData = result.data
    
    if (result.code === 0) {
      commit(GET_HOME_DATA,{homeData})  //调用mutations直接更新数据
    }
  }
}