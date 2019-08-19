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
      <div class="login-way">
        <div class="phone-way">
          <div class="input_phone">
            <input type="text" placeholder="请输入手机号">
          </div>
          <div class="input_code">
            <input type="text" placeholder="请输入短信验证码">
            <div class="get_password">获取验证码</div>
          </div>
          <div class="login_help">
            <span>遇到问题?</span> 
            <span class="span-pwd">使用密码验证登录</span>
          </div>
          <div class="login_btn">登录</div>
          <div class="help-clause">
            <i class="iconfont icon-duihao"></i>
            <span>我同意<a href="javascript:;">《服务条款》</a>和<a href="javascript:;">《网易隐私政策》</a></span>
          </div>
          <div class="back_btn">其他登录方式
            <i class="iconfont icon-a3right"></i>
          </div>
        </div>
        <div class="email-way">

        </div>
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
      background-color #fff
      width 100%
      height 86.8%
      .login-img
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        margin 28px auto 0
        width 96px
        height 32px
        img 
          width 100%
          height 100%
      .login-way
        height 260px
        position absolute
        top 90px
        left 0
        .phone-way
          width 90%
          margin 0 auto
          // position relative
          .input_phone
            height 46px
            width 100%
            border-bottom 1px solid #ccc
            box-sizing border-box
            padding 8px 0
            input
              font-size 14px
              color #ccc
          .input_code
            margin-top 18px
            height 46px
            width 100%
            border-bottom 1px solid #ccc
            box-sizing border-box
            padding 8px 0
            position relative
            input
              font-size 14px
              color #ccc
            .get_password
              width 82px
              height 26px
              line-height 26px
              color #333
              font-size 14px
              border 1px solid #ccc
              border-radius 2px
              position absolute
              top 10px
              right 5px
              text-align center
          .login_help
            margin-top 14px
            height 46px
            width 100%
            box-sizing border-box
            padding 8px 0
            display flex
            justify-content space-between
            span
              font-size 14px
              color #666
          .login_btn
            width 100%
            height 45px
            line-height 45px
            background #DD1A21
            font-size 14px
            color #fff
            border-radius 3px
            text-align center
          .help-clause
            width 375px
            height 20px
            color #666
            margin-top 10px
            font-size 12px
            .iconfont 
              margin-right 5px
              font-size 18px
          .back_btn
            width 375px
            height 20px
            color #333
            margin-top 28px
            font-size 14px
            transform translateX(30%)
</style>
