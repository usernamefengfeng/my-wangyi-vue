<template>
  <div class="find-module">
    <div class="find-title">
      <i class="iconfont icon-shouye" @click="$router.replace('/home')"></i>
      <h1>
        <span class="find-text">发现</span>
        <span class="find-zhen">甄选家</span>
      </h1>
      <div class="search-shopCar">
        <i class="iconfont icon-fangdajing" @click="$router.replace('/searchGoods')"></i>
        <i class="iconfont icon-gouwuche" @click="$router.replace('/shopCart')"></i>
      </div>
    </div>
    <div class="find_tab">
      <ul>
        <li class>盛夏特别版</li>
        <li class="active">推荐</li>
        <li class>好货内部价</li>
        <li class>回购榜</li>
        <li class>晒单</li>
        <li class>开发者日记</li>
        <li class>达人</li>
        <li class>HOME</li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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
      height 37px
      overflow hidden
      font-size 14px
      border-top 1px solid #ddd
      background-color: #fafafa
      >ul
        width 100%
        height 100%
        display flex
        justify-content space-around
        >li
          height 100%
          box-sizing border-box
          padding 0 5px
          line-height 37px
          color #666
          &.active
            color $themeColor
            border-bottom 3px solid $themeColor
</style>
