<template>
  <ul class="footer_nav">
    <li :class="{active: $route.path === '/home'}" @click="goto('/home')">
      <div class="footer-icon">
        <i class="iconfont icon-home_normal"></i>
        <!-- <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon"> -->
        <span>首页</span>
      </div>
    </li>
    <li :class="{active: $route.path === '/categoryList'}" @click="goto('/categoryList')">
      <div class="footer-icon">
        <i class="iconfont icon-leimupinleifenleileibie1"></i>
        <!-- <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon"> -->
        <span>分类</span>
      </div>
    </li>
    <li :class="{active: $route.path === '/seeGoods'}" @click="goto('/seeGoods')">
      <div class="footer-icon">
        <i class="iconfont icon-shiwu"></i>
        <!-- <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon"> -->
        <span>识物</span>
      </div>
    </li>
    <li :class="{active: $route.path === '/shopCart'}" @click="goto('/shopCart')">
      <div class="footer-icon">
        <i class="iconfont icon-gouwuche-copy"></i>
        <!-- <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon"> -->
        <span>购物车</span>
      </div>
    </li>
    <li :class="{active: $route.path === '/profile'}" @click="goto('/profile')">
      <div class="footer-icon">
        <i class="iconfont icon-icon_boss"></i>
        <!-- <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon"> -->
        <span>个人</span>
      </div>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      goto (path) {
        this.$router.replace(path)
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .footer_nav
    position fixed
    bottom 0px
    left 0px
    box-sizing border-box
    display flex
    justify-content space-around
    height 47px
    width 100%
    font-size 24px
    background-color #fff
    li
      position relative
      display flex
      flex-direction column
      justify-content space-around
      color #ccc
      &.active
        color #b4282d
      .footer-icon
        position absolute
        left -25px
        bottom 0px
        display flex
        flex-direction column
        align-items center
        width 50px
        height 40px
        overflow hidden
        .iconfont
          font-size 22px
        span 
          font-size 12px
</style>