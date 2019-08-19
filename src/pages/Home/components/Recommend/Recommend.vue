<template>
  <div class="popular_box">
    <div class="popular_header">
      <span class="popular_title">人气推荐</span>
      <span class="popular_more">更多 ></span>
    </div>
    <ul class="popular_goods">
      <li>
        <img
          src="http://yanxuan.nosdn.127.net/e52cb767feb1578fbb7f2b77d70267c8.png"
          alt="人气推荐"
          data-src="http://yanxuan.nosdn.127.net/e52cb767feb1578fbb7f2b77d70267c8.png"
          lazy="loaded"
        />
        <div class="popular_info">
          <span class="popular_name">21s素暖轻磨毛四件套</span>
          <br />
          <span class="popular_desc">厚实粗犷肌理感，越睡越舒适</span>
          <br />
          <span class="popular_price">¥399</span>
        </div>
      </li>
      <li>
        <img
          src="http://yanxuan.nosdn.127.net/489d9ee22b95c14044592dcc43ae3aa2.png"
          alt="人气推荐"
          data-src="http://yanxuan.nosdn.127.net/489d9ee22b95c14044592dcc43ae3aa2.png"
          lazy="loaded"
        />
        <div class="popular_info">
          <span class="popular_name">
            30包
            谷风一木软抽面巾纸囤...
          </span>
          <!---->
          <!---->
          <!---->
          <span class="popular_price">¥75</span>
        </div>
      </li>
      <li>
        <img
          src="http://yanxuan.nosdn.127.net/a7aad09d3b57ad24586cd3581f8d748c.jpg"
          alt="人气推荐"
          data-src="http://yanxuan.nosdn.127.net/a7aad09d3b57ad24586cd3581f8d748c.jpg"
          lazy="loaded"
        />
        <div class="popular_info">
          <span class="popular_name">男式轻薄无缝羽绒服</span>
          <!---->
          <!---->
          <!---->
          <span class="popular_price">¥239</span>
        </div>
      </li>
      <li>
        <img
          src="http://yanxuan.nosdn.127.net/f2b80ed18c71a06ca7b38bb26cf2d781.png"
          alt="人气推荐"
          data-src="http://yanxuan.nosdn.127.net/f2b80ed18c71a06ca7b38bb26cf2d781.png"
          lazy="loaded"
        />
        <div class="popular_info">
          <span class="popular_name">真皮毛女童系结雪地靴</span>
          <!---->
          <!---->
          <!---->
          <span class="popular_price">¥244</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .popular_box
    width 96%
    .popular_header
      display flex
      align-items center
      justify-content space-between
      .popular_title
        font-size 16px
        line-height 50px
        margin 0 10px 0 25px
      .popular_more
        font-size 14px
        line-height 50px
        margin-right 25px
    .popular_goods
      width 100%
      display flex
      flex-wrap wrap
      padding-left 15px
      >li
        width 107px
        height 159px
        margin-right 10px
        &:first-child
          width 100%
          height 160px
          display flex
          align-items center
          >img
            width 140px
            height 140px
            margin 0
          .popular_info
            margin 0 25px
        >img
          width 107px
          height 108px
          margin-bottom 6px
          background-color #f5f5f5
        .popular_info
          height 50px
          font-size 12px
          line-height 18px
          .popular_name
            color #333333
          .popular_desc
            font-size 12px
            color #7f7f7f
          .popular_price
            color $themeColor
</style>
