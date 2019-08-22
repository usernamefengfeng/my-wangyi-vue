<template>
  <div class="find-module">
    <div class="find-title">
      <i class="iconfont icon-shouye" @click="$router.replace('/home')"></i>
      <h1>
        <span class="find-text" @click="isShow=true;$router.replace('/seeGoods/findGoods')">发现</span>
        <span class="find-zhen" @click="isShow=false;$router.replace('/seeGoods/zhenXuan')">甄选家</span>
      </h1>
      <div class="search-shopCar">
        <i class="iconfont icon-fangdajing" @click="$router.replace('/searchGoods')"></i>
        <i class="iconfont icon-gouwuche" @click="$router.replace('/shopCart')"></i>
      </div>
    </div>
    <div class="find_tab">
      <ul>
        <li :class="{active: currentIndex === index}" 
            v-for="(item, index) in liArr" :key="index" @click="addTo(index)">{{item}}</li>
      </ul>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script type="text/ecmascript-6">
// import FindGoods from './pages/FindGoods/FindGoods'
// import ZhenXuan from './pages/ZhenXuan/ZhenXuan'
import Bscroll from 'better-scroll'
export default {
  data() {
    return {
      liArr: ['盛夏特别版','推荐','好货内部价','回购榜','晒单','开发者日记','达人','HOME'],
      currentIndex: 0,
      isShow: true,   //路由组件FindGoods/ZhenXuan是否显示标识
    }
  },

  methods: {
    addTo (index) {
      this.currentIndex = index
    }
  },

  mounted() {
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new Bscroll('.find_tab',{
          click: true,
          scrollX: true
        })
      } else {
        this.scroll.refresh()
      }
    })
  },

  // components: {
  //   FindGoods,
  //   ZhenXuan
  // }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .find-module
    .find-title
      position fixed
      display flex
      box-sizing border-box
      width 100%
      height 44px
      padding 14px
      background #fafafa
      position relative
      h1
        position absolute
        top 50%
        left 50%
        transform translate(-50%,-50%)
        font-size 16px
        color #333
        font-weight bold
        font-family '新宋体'
        display flex
        span 
          vertical-align middle
          padding-top 4px
          &.find-text
            font-weight bold
            padding-top 0
            font-family 'heiti'
            color #b4282d
            margin-right 10px
            font-size 20px
      .iconfont
        font-size 24px
      .search-shopCar
        position absolute
        top 50%
        right 20px
        transform translateY(-50%)
        display flex
        .iconfont
          font-size 32px
          vertical-align middle
          color #666
          &.icon-fangdajing
            margin 0 10px 4px 0

    .find_tab
      position fixed
      top 44px
      left 0
      width 100%
      height 42px
      overflow hidden
      font-size 14px
      border-top 1px solid #ddd
      background-color: #fafafa
      >ul
        height 100%
        margin-left 12px
        width 600px
        display flex
        justify-content space-around
        >li
          height 36px
          width 78px
          box-sizing border-box
          margin-right 2px
          padding 2px 0
          line-height 37px
          text-align center
          color #666
          &.active
            color #B4282D
            border-bottom 1px solid #B4282D
</style>
