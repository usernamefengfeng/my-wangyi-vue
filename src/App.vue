<template>
  <div class="appContainer">
    <router-view/>
    <Footer v-show="$route.meta.showFooter"/>
  </div>
</template>

<script type="text/ecmascript-6">
import Home from './pages/Home/Home'
import CategoryList from './pages/CategoryList/CategoryList'
import SeeGoods from './pages/SeeGoods/SeeGoods'
import ShopCart from './pages/ShopCart/ShopCart'
import Profile from './pages/Profile/Profile'
  export default {
    components: {
      Home,
      CategoryList,
      SeeGoods,
      ShopCart,
      Profile
    },

    mounted() {
      this.$store.dispatch('getHomeData')
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .appContainer
    width 100%
    height 100%
</style>
