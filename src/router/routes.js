/* 
  所有配置的路由
*/
import Home from '../pages/Home/Home.vue'
import CategoryList from '../pages/CategoryList/CategoryList.vue'
import SeeGoods from '../pages/SeeGoods/SeeGoods.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Profile from '../pages/Profile/Profile.vue'

import HeaderTitle from '../components/HeaderTitle/HeaderTitle.vue'

export default [
  {
    path: '/home',
    component: Home,
    meta: {
      showFooter: true
    },
    children:[
      {
        path: '/home/headerTitle',
        component: HeaderTitle,
      }
    ]
  },
  {
    path: '/categoryList',
    component: CategoryList,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/seeGoods',
    component: SeeGoods,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/shopCart',
    component: ShopCart,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/',
    redirect: '/home'
  }
]