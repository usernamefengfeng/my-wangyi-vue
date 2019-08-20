/* 
  包含多个接口请求函数的模块
  函数的返回值是promise
*/
import ajax from './ajax'

const BASE = '/api'  //跨域代理

//商品分类接口
export const reqCategorys = () => ajax.get('/categorys')  //mock数据

//home接口
export const reqHomeData = () => ajax.get('/home')       //mock数据

//搜索关键字的 接口
export const reqInitSearch = () => ajax.post(`${BASE}/xhr/search/searchAutoComplete.json`)       //搜索关键字

//搜索结果
export const reqSearchResult = (keyword) => ajax.post(`${BASE}/xhr/search/searchAutoComplete.json`,{
  keyword
})