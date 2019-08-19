<template>
  <div class="zhong_chou_box">
    <div class="z_chou_header">
      <span class="z_chou_title">众筹</span>
      <span class="z_chou_more">更多 ></span>
    </div>
    <ul class="z_chou_goods">
      <li>
        <img
          src="https://yanxuan.nosdn.127.net/f0007d7b330b5ed3e88f43f27f9f565a.png"
          alt="新品"
          data-src="https://yanxuan.nosdn.127.net/f0007d7b330b5ed3e88f43f27f9f565a.png"
          lazy="loaded"
        />
        <div class="z_chou_info">
          <div class="z_chou_title">易武贡茶 迷你普洱茶饼100克</div>
          <div class="z_chou_price">¥198起</div>
          <div class="z_chou_p_box">
            <div class="z_chou_progress">
              <div class="bg" style="width: 216%;"></div>
            </div>
            <div class="z_chou_percent">216%</div>
          </div>
          <div class="z_chou_supportNum">217人已支持</div>
        </div>
      </li>
      <li>
        <img
          src="https://yanxuan.nosdn.127.net/4ffd108225357b1ce5d95c3dcd1eb2a4.png"
          alt="新品"
          data-src="https://yanxuan.nosdn.127.net/4ffd108225357b1ce5d95c3dcd1eb2a4.png"
          lazy="loaded"
        />
        <div class="z_chou_info">
          <div class="z_chou_title">RevoMax经典热量瓶</div>
          <div class="z_chou_price">¥169起</div>
          <div class="z_chou_p_box">
            <div class="z_chou_progress">
              <div class="bg" style="width: 33%;"></div>
            </div>
            <div class="z_chou_percent">33%</div>
          </div>
          <div class="z_chou_supportNum">62人已支持</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .zhong_chou_box
    .z_chou_header
      display flex
      align-items center
      justify-content space-between
      .z_chou_title
        font-size 16px
        line-height 50px
        margin 0 10px 0 25px
      .z_chou_more
        font-size 14px
        line-height 50px
        margin-right 25px
    .z_chou_goods
      padding-left 10px
      display flex
      flex-direction column
      >li
        height 125px
        display flex
        &:first-child
          border-top 1px solid #d8d8d8
          padding-top 10px
        >img
          width 105px
          height 105px
          background-color #f5f5f5
        .z_chou_info
          height 100%
          margin-left 15px
          font-size 12px
          line-height 18px
          display flex
          flex-direction column
          .z_chou_title
            color #7f7f7f
          .z_chou_price
            color #7f7f7f
            margin-top 4px
          .z_chou_p_box
            display flex
            align-items center
            justify-content center
            margin-top 5px
            .z_chou_progress
              width 180px
              height 3px
              margin-right 10px
              background #d8d8d8
              display flex
              justify-content flex-start
              .bg
                height 100%
                background-color #fea438
            .z_chou_percent
              color #7f7f7f
          .z_chou_supportNum
            margin-top 20px
            color #7f7f7f
</style>
