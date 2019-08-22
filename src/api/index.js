/* 
  包含多个接口请求函数的模块
  函数的返回值是promise
*/
import ajax from './ajax'

const BASE = '/api'  //跨域代理
const USER = '/user'

//商品分类接口
export const reqCategorys = () => ajax.get('/categorys')  //mock数据

//home接口
export const reqHomeData = () => ajax.get('/home')       //mock数据

//http://m.you.163.com/xhr/search/searchAutoComplete.json

//搜索关键字的 接口
// export const reqInitSearch = () => ajax.post(`${BASE}/xhr/search/searchAutoComplete.json`)       //搜索关键字

//搜索结果
// export const reqSearchResult = (keyword) => ajax.post(`${BASE}/xhr/search/searchAutoComplete.json`,{
//   keyword
// })

/* 
  手机号短信验证码登陆
*/
export const reqSmsLogin = (phone,code) => ajax.post(USER + '/login_sms',{
  phone,
  code
})
// http://localhost:4000/sendcode

/* 
  发送短信验证码登录
*/
export const reqSendCode = (phone) => ajax.get(USER + '/sendcode?phone='+phone)

/* 
  搜索关键字
*/
export const reqSearchKeyWords = () => ajax.get('/searchKeyWords')

/* 
  搜索关键字结果
*/
export const reqSearchResult = (keyword) => ajax.get('/searchKeyWords',{
  keyword
})