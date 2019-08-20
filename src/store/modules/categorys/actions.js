import {
  GET_CATEGORYS_DATA,
} from './mutations-types'

import {
  reqCategorys
} from '../../../api/index'

export default{
  async getCategorysData ({commit}) {
    const result = await reqCategorys()  //ajax请求
    // console.log(result)
    const categorysData = result.data
    
    if (result.code === 0) {
      commit(GET_CATEGORYS_DATA,{categorysData})  //调用mutations直接更新数据
    }
  }
}