<template>
  <div class="find-module">
    <div class="find-container">
      <div class="find-title">
        <div class="hearder-title">
          <div class="icon">
            <i class="iconfont icon-shouye" @click="$router.replace('/home')"></i>
          </div>
          <h1>
            <span class="find-text" :class="{active: $route.path==='/seeGoods/findGoods/0'}" @click="$router.replace('/seeGoods/findGoods/0')">发现</span>
            <span class="find-zhen" :class="{active: $route.path==='/seeGoods/zhenXuan'}" @click="$router.replace('/seeGoods/zhenXuan')">甄选家</span>
          </h1>
          <div class="search-shopCar">
            <i class="iconfont icon-fangdajing" @click="$router.replace('/searchGoods')"></i>
            <i class="iconfont icon-gouwuche" @click="$router.replace('/shopCart')"></i>
          </div>
        </div>
      </div>
      <!-- <FindGoods v-if="isShow"/>
      <ZhenXuan v-else/> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import FindGoods from './pages/FindGoods/FindGoods'
import ZhenXuan from './pages/ZhenXuan/ZhenXuan'
export default {
  data() {
    return {
      isShow: true,   //路由组件FindGoods/ZhenXuan是否显示标识
    }
  },

  components: {
    FindGoods,
    ZhenXuan
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .find-module
    width 375px
    height 100%
    .find-container
      .find-title
        width 100%
        height 50px
        background #fafafa
        position fixed
        box-sizing border-box
        border-bottom .5px solid #ccc
        z-index 10
        .hearder-title
          height 50px
          max-width 768px
          box-sizing border-box
          margin auto 
          overflow hidden
          position relative
          padding 12px
          .icon
            float left
            .iconfont
              display block
              font-size 22px
          h1
            position: absolute;
            width 160px
            height 100%
            line-height 47px
            text-align center
            left 50%
            top 0
            margin-left -80px
            font-size 14px
            color #7F7F7F
            z-index 1
            .find-text
              padding 0 8px
              vertical-align middle
              &.active
                font-size 20px
                color #b4282d
                font-weight bold
            .find-zhen
              font-size 14px
              padding 0 8px
              vertical-align middle
              &.active
                font-size 20px
                color #b4282d
                font-weight bold
          .search-shopCar
            position absolute
            right 0
            top 50%
            transform translateY(-50%)
            margin-right 15px
            float right
            height 50px
            line-height 50px
            display block
            box-sizing border-box
            .iconfont
              font-size 30px
              display block
              height 50px
              line-height 50px
              float left 
              color #666
            .icon-gouwuche
              margin 2px 0 0 15px
</style>
