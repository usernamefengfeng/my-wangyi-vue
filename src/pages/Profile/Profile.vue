<template>
  <div class="profile">
    <div class="profile-title">
      <i class="iconfont icon-shouye" @click="$router.replace('/home')"></i>
      <h1>网易严选</h1>
      <div class="search-shopCar">
        <i class="iconfont icon-fangdajing"></i>
        <i class="iconfont icon-gouwuche"></i>
      </div>
    </div>
    <div class="profile-content">
      <div class="login-img">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="netease">
      </div>
      <div class="profile-login">
        <div class="login-btn-phone" @click="$router.replace('/login')">
          <i class="iconfont icon-dianhua"></i>
          <span class="login-phone">手机号快捷登录</span>
        </div>
        <div class="login-btn-email" @click="$router.replace('/login')">
          <i class="iconfont icon-youxiang2"></i>
          <span class="login-email">邮箱账号登录</span>
        </div>
      </div>
      <div class="icon-login">
        <p>
          <i class="iconfont icon-weixin2"></i>
          <span>微信</span>
        </p>
        <p>
          <i class="iconfont icon-QQ1"></i>
          <span>QQ</span>
        </p>
        <p>
          <i class="iconfont icon-weibo"></i>
          <span>微博</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .profile
    width 100%
    height 100%
    .profile-title
      position fixed
      display flex
      box-sizing border-box
      width 100%
      height 44px
      padding 13px
      background #fafafa
      position relative
      h1
        position absolute
        top 50%
        left 50%
        transform translate(-50%,-50%)
        font-size 18px
        color #333
        font-weight bold
        font-family '新宋体'
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
    .profile-content
      position relative
      padding-top 44px
      background-color #f4f4f4
      width 100%
      height 86.8%
      .login-img
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        margin 80px auto 0
        width 134px
        height 45px
        img 
          width 100%
          height 100%
      .profile-login
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        margin 65% 5% 0
        width 100%
        box-sizing border-box
        .login-btn-phone,.login-btn-email
          width 90%
          height 47px
          line-height 47px
          text-align center
          border 0 solid #DD1A21
          background #DD1A21
          margin-bottom 15px
          border-radius 3px
          color #fff
          font-size 14px
          i 
            margin-right 10px
            font-size 22px
        .login-btn-email
          background #fff
          border 1px solid #DD1A21
          color #DD1A21
          i 
            font-size 16px
      .icon-login
        position absolute
        bottom 42px
        left 0
        display flex
        width 100%
        justify-content center
        p
          float left
          display flex
          margin-right 30px
          color #666
          .iconfont
            padding-top 2px
            font-size 14px
            margin-right 5px
          span 
            font-size 16px
</style>

