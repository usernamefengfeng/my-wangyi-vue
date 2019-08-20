/* 
  包含多个接口请求函数的模块
  函数的返回值是promise
*/
import ajax from './ajax'

const BASE = '/api'  //跨域代理

export const reqCategorys = () => ajax.get('/categoryList')

export const reqHomeData = () => ajax.get('/home')