<template>
  <div class="freshmanModule">
    <div class="freshman">
      <i class="iconfont icon-hengxian2"></i>
      新人专享礼
      <i class="iconfont icon-hengxian2"></i>
      </div>
    <div class="man">
      <div class="left">
        <div class="name" >新人专享礼包</div>
        <div class="imgWrap">
          <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" />
        </div>
      </div>
      <div class="right">
        <div class="right-top">
          <div class="shoes">
            <h1>福利社</h1>
            <h2>今日特价</h2>
          </div>
          <div class="imgWrap">
            <img src="https://yanxuan-item.nosdn.127.net/81e3c70911ba7b4b3a5a6e40be3f2b27.png"
                v-lazy="'https://yanxuan-item.nosdn.127.net/81e3c70911ba7b4b3a5a6e40be3f2b27.png'"/>
          </div>
          <div class="scroil">
            <span>￥24.6</span>
            <b>￥32.9</b>
          </div>
        </div>
        <div class="right-bottom">
          <div class="one-shoes">
            <h1>新人拼团</h1>
            <h2>1元起包邮</h2>
          </div>
          <div class="imgWrap">
            <img src="https://yanxuan-item.nosdn.127.net/58b7b4a5277dddbfd9b99b07f38b6c20.png"
                v-lazy="'https://yanxuan-item.nosdn.127.net/58b7b4a5277dddbfd9b99b07f38b6c20.png'"/>
          </div>
          <div class="scroil">
            <span>￥24.6</span>
            <b>￥32.9</b>
          </div>
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
  .freshmanModule
    display flex
    box-sizing border-box
    flex-direction column
    width 100%
    margin-top 10px
    background-color #fff
    padding 0 10px
    margin-bottom 20px
    .freshman
      font-size 16px
      line-height 45px
      margin 0 auto
      .iconfont
        font-size 18px
    .man
      display flex
      .left
        font-size 16px
        width 173px
        height 217px
        background-color #f9e9cf
        .name
          padding 20px
        .imgWrap
          img 
            display block
            width 130px
            height 130px
            margin 0 auto
      .right
        margin-left 2px
        .right-top
          position relative
          display flex
          width 171px
          height 108px
          background-color #FBE2D3
          font-size 12px
          .shoes
            padding 20px
            position absolute
            h1
              font-size 16px
              margin-bottom 6px
            h2
              color #7f7f7f
          .imgWrap
            img 
              width 100px
              height 100px
              margin-left 70px
          .scroil
            position absolute
            top 20px
            right 30px
            display flex
            flex-direction column
            align-items center
            justify-content center
            width 40px
            height 40px
            border-radius 100%
            background-color #F59524
            color #fff
            b
              font-size 10px
        .right-bottom
          position relative
          display flex
          margin-top 2px
          width 173px
          height 108px
          background-color #FFECC2
          font-size 12px
          .one-shoes
            padding 20px
            position absolute
            h1
              font-size 16px
              margin-bottom 6px
            h2
              background #ccc
              padding 2px
              text-align center
              color #fff
          .imgWrap
            img 
              width 100px
              height 100px
              margin-left 70px
          .scroil
            position absolute
            top 20px
            right 20px
            display flex
            flex-direction column
            align-items center
            justify-content center
            width 40px
            height 40px
            border-radius 100%
            background-color #F59524
            color #fff
            b
              font-size 12px
</style>