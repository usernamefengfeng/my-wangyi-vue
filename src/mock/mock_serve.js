/* 
  使用mockjs定义的mock接口
*/
import Mock from 'mockjs'
import categoryListData from './categoryList.json'
import homeData from './homeData.json'
import categorysData from './categorys.json'


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

//category接口----商品分类
Mock.mock('/categorys',{
  code: 0,
  data: categorysData
})