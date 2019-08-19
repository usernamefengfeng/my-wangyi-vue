<template>
  <div class="shopCar">
    <div class="shop-car-title">
      <h1>购物车</h1>
      <span @click="$router.push('/profile')">领劵</span>
    </div>
    <div class="shop-car-content">
      <ul>
        <li>
          <i class="iconfont icon-yuanquan2"></i>
          <span>30天无忧退货</span>
        </li>
        <li>
          <i class="iconfont icon-yuanquan2"></i>
          <span>48小时快速退货</span>
        </li>
        <li>
          <i class="iconfont icon-yuanquan2"></i>
          <span>满88元免邮费</span>
        </li>
      </ul>
      <div class="shop-car-login">
        <i class="iconfont icon-tuanduicankaoxian-"></i>
        <span>去添加点什么吧...</span>
        <button class="shop-car-btn" @click="$router.push('/profile')">登录</button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .shopCar
    width 100%
    height 100%
    .shop-car-title
      display flex
      position relative
      box-sizing border-box
      width 100%
      height 44px
      padding 13px
      position fixed
      background #fff
      h1
        font-size 18px
        color #666
      span
        position absolute
        bottom 15px
        right 30px
        font-size 16px
        color #B4282D
    .shop-car-content
      padding-top 44px
      background-color #f4f4f4
      width 100%
      height 575px
      ul
        width 100%
        height 35px
        line-height 35px
        background #eee
        li
          float left
          font-size 12px
          color #666
          margin 0 18px
          .iconfont
            font-size 4px
      .shop-car-login
        position relative
        .iconfont
          font-size 100px
          color #ccc
          position absolute
          left 50%
          top 260px
          transform translate(-50%,-50%)
        span
          color #ccc
          font-size 14px
          position absolute
          left 35%
          top 308px
        .shop-car-btn
          position absolute
          left 50%
          top 370px
          transform translate(-50%,-50%)
          display block
          width 65%
          height 46px
          background-color #b4282d
          border-radius 4px
          border 1px solid #b4282d
          color #fff
          font-size 16px
</style>
