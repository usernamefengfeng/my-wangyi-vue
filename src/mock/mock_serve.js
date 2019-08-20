/* 
  使用mockjs定义的mock接口
*/
import Mock from 'mockjs'
import categoryListData from './categoryList.json'
import homeData from './homeData.json'


//categoryList接口
Mock.mock('/categoryList',{
  code: 0,
  data: categoryListData
})

//homeData接口
Mock.mock('/home',{
  code: 0,
  data: homeData
})