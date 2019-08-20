<template>
  <div class="shopcar_box clearfix">
    <div class="top_search">
      <div class="input_label">
        <div class="scale_img">
          <img
            src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png"
            alt="搜索"
          />
        </div>
        <!---->
        <input type="text" placeholder="美妆护肤 女王专享7折起" />
      </div>
      <span class="right_back" @click="$router.back()">取消</span>
      <!---->
    </div>
    <div class="bottom_title">热门搜索</div>
    <ul>
      <li>
        <a href="javascript:" class>爆款 行李箱</a>
      </li>
      <li>
        <a href="javascript:" class>香氛牙膏 谈吐芳香</a>
      </li>
      <li>
        <a href="javascript:" class>轻弹云朵拖鞋9.9元</a>
      </li>
      <li>
        <a href="javascript:" class>中秋月饼 上新热卖</a>
      </li>
      <li>
        <a href="javascript:" class>酸梅汤 吃货推荐</a>
      </li>
      <li>
        <a href="javascript:" class>内裤</a>
      </li>
      <li>
        <a href="javascript:" class="active">韩国造 睡眠喷雾</a>
      </li>
      <li>
        <a href="javascript:" class>行李箱</a>
      </li>
      <li>
        <a href="javascript:" class>男士内裤</a>
      </li>
      <li>
        <a href="javascript:" class>女鞋</a>
      </li>
      <li>
        <a href="javascript:" class>水杯</a>
      </li>
      <li>
        <a href="javascript:" class>黄桃罐头</a>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .shopcar_box
    width 100%
    height 500px
    .top_search
      position relative
      width 345px
      height 28px
      margin 10px 0 0 15px
      font-size 0
      display flex
      align-items center
      .result_show
        position absolute
        left 0
        bottom 0
        z-index 1
        width 750px
        min-height 1258px
        box-sizing border-box
        transform translate(-15px ,100%)
        background-color: #f4f4f4
        >ul
          width 100%
          padding 0 15px
          box-sizing border-box
          background-color: #fff
          >li
            width 100%
            height 45px
            border-bottom  1px solid #eee
            font-size 14px
            line-height 60px
      .input_label
        position relative
        width 100%
        height 100%
        .clear_img
          position absolute
          top 7px
          right 14px
          width 14px
          height 14px
          border-radius 50%
          line-height: 14px;
          text-align: center;
          font-size: 12px;
          color #f2f2f2
          background-color: #888
        .scale_img
          position absolute
          width 30px
          height 100%
          background-color: #f4f4f4
          display flex
          align-items center
          justify-content center
          >img
            width 14px
            height 14px
        >input
          display block
          width 277px
          height 100%
          padding-left 30px
          outline none
          border 0 none
          margin 0
          background-color #f4f4f4
          font-size 14px
      .right_back
        width 33px
        font-size 14px
        color #333
    .bottom_title
      padding 15px 0 0 15px
      font-size 14px
      color #999
    >ul
      padding 15px 0 0 15px
      font-size 14px
      display flex
      flex-wrap wrap
      >li
        margin 0 12px 12px 0
        a
          margin-right 16px
          padding 4px 7px
          border 1px solid #999
          height 23px
          line-height 23px
          text-align center
          font-size 14px
          &.active
            border-color $themeColor
</style>
