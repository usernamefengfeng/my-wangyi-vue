/* 
  所有配置的路由
*/
//一级路由
// import Home from '../pages/Home/Home.vue'
// import CategoryList from '../pages/CategoryList/CategoryList.vue'
// import SeeGoods from '../pages/SeeGoods/SeeGoods.vue'
// import ShopCart from '../pages/ShopCart/ShopCart.vue'
// import Profile from '../pages/Profile/Profile.vue'
import SearchGoods from '../pages/Home/components/SearchGoods/SearchGoods.vue'
import LoginPhone from '../pages/Login/LoginPhone/LoginPhone.vue'
import LoginEmail from '../pages/Login/LoginEmail/LoginEmail.vue'

//路由懒加载
const Home = () => import('../pages/Home/Home.vue')
const CategoryList = () => import('../pages/CategoryList/CategoryList.vue')
const SeeGoods = () => import('../pages/SeeGoods/SeeGoods.vue')
const ShopCart = () => import('../pages/ShopCart/ShopCart.vue')
const Profile = () => import('../pages/Profile/Profile.vue')


//二级路由
import HeaderTitle from '../components/HeaderTitle/HeaderTitle.vue'
import FindGoods from '../pages/SeeGoods/pages/FindGoods/FindGoods.vue'
import ZhenXuan from '../pages/SeeGoods/pages/ZhenXuan/ZhenXuan.vue'

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
    path: '/categoryList/:categoryId',
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
    },
    children: [
      {
        path: '/seeGoods/findGoods/:id',
        component: FindGoods,
        meta: {
          showFooter: true
        },
      },
      {
        path: '/seeGoods/zhenXuan',
        component: ZhenXuan,
        meta: {
          showFooter: true
        },
      },
      {
        path: '/seeGoods',
        redirect: '/seeGoods/findGoods/0',
        meta: {
          showFooter: true
        },
      },
    ]
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
    path: '/searchGoods',
    component: SearchGoods,
  },
  {
    path: '/loginPhone',
    component: LoginPhone,
  },
  {
    path: '/loginEmail',
    component: LoginEmail,
  },
  {
    path: '/',
    redirect: '/home'
  }
]