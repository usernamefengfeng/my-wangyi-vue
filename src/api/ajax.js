/* 
  能发ajax请求的函数，函数的返回值是promise对象
*/
import axios from 'axios'
import qs from 'qs'
import {Toast} from 'mint-ui'


/* 
  添加请求拦截器
*/
axios.interceptors.request.use(config => {
  const {method,data} = config

  if (method.toUpperCase() === 'POST' && data instanceof Object) {
    //将data的json格式转换为urlencode格式
    config.data = qs.stringify(data)
  }

  return config  //返回config对象
})

/* 
  添加响应拦截器
*/
axios.interceptors.response.use(response => {
  //让返回的额结果不在是response，而是response.data
  return response.data  
},error => { //统一处理错误，响应拦截器失败的回调
  Toast('拦截器处理失败的回调:' + error)
  return new Promise(() => {})
})

export default axios