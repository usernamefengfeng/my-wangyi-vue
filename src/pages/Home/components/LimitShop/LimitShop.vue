<template>
  <div class="flash_sale_box">
    <div class="flash_header">
      <div class="left_info">
        <span class="flash_title">限时购</span>
        <div class="flash_time">
          <span class="hour">03</span>
          <span class="point">:</span>
          <span class="minutes">04</span>
          <span class="point">:</span>
          <span class="seconds">05</span>
        </div>
      </div>
      <span class="flash_more">更多 ></span>
    </div>
    <ul class="flash_goods">
      <li>
        <img
          src="http://yanxuan.nosdn.127.net/ff90462e4d7c7edd01a25f8932e1800f.png"
          alt="picUrl"
          data-src="http://yanxuan.nosdn.127.net/ff90462e4d7c7edd01a25f8932e1800f.png"
          lazy="loaded"
        />
        <div class="bottom_info">
          <span class="flash_price">¥289</span>
          <span class="old_price">¥349</span>
        </div>
      </li>
      <li>
        <img
          src="http://yanxuan.nosdn.127.net/fe06530dd35ec5062c1ecaf82d4812d6.png"
          alt="picUrl"
          data-src="http://yanxuan.nosdn.127.net/fe06530dd35ec5062c1ecaf82d4812d6.png"
          lazy="loaded"
        />
        <div class="bottom_info">
          <span class="flash_price">¥125</span>
          <span class="old_price">¥179</span>
        </div>
      </li>
      <li>
        <img
          src="http://yanxuan.nosdn.127.net/de34d4d8407709f2edd88597d66fcfcb.png"
          alt="picUrl"
          data-src="http://yanxuan.nosdn.127.net/de34d4d8407709f2edd88597d66fcfcb.png"
          lazy="loaded"
        />
        <div class="bottom_info">
          <span class="flash_price">¥584</span>
          <span class="old_price">¥899</span>
        </div>
      </li>
      <li>
        <img
          src="http://yanxuan.nosdn.127.net/da9c2255909d0d1fe5cabff6d93c03db.png"
          alt="picUrl"
          data-src="http://yanxuan.nosdn.127.net/da9c2255909d0d1fe5cabff6d93c03db.png"
          lazy="loaded"
        />
        <div class="bottom_info">
          <span class="flash_price">¥2079</span>
          <span class="old_price">¥2599</span>
        </div>
      </li>
      <li>
        <img
          src="http://yanxuan.nosdn.127.net/8b7bde0b395e2bda54505cf4c3b7880b.png"
          alt="picUrl"
          data-src="http://yanxuan.nosdn.127.net/8b7bde0b395e2bda54505cf4c3b7880b.png"
          lazy="loaded"
        />
        <div class="bottom_info">
          <span class="flash_price">¥29.9</span>
          <span class="old_price">¥35.8</span>
        </div>
      </li>
      <li>
        <img
          src="http://yanxuan.nosdn.127.net/2adbaae8403ac4dcac56ebf2ff1a5116.png"
          alt="picUrl"
          data-src="http://yanxuan.nosdn.127.net/2adbaae8403ac4dcac56ebf2ff1a5116.png"
          lazy="loaded"
        />
        <div class="bottom_info">
          <span class="flash_price">¥87.2</span>
          <span class="old_price">¥109</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .flash_sale_box
    .flash_header
      display flex
      align-items center
      justify-content space-between
      .left_info
        display flex
        align-items center
        .flash_title
          font-size 16px
          line-height 50px
          margin 0 10px 0 25px
        .flash_time
          display flex
          .hour
          .minutes
          .seconds
            display block
            width 18px
            height 18px
            font-size 12px
            line-height 18px
            text-align center
            color #fff
            background-color: #333
          .point
            margin 0 10px
            font-size 14px
      .flash_more
        font-size 14px
        line-height 50px
        margin-right 25px
    .flash_goods
      display flex
      flex-wrap wrap
      justify-content space-around
      padding-left 10px
      >li
        width 108px
        height 158px
        margin-right 10px
        >img
          width 108px
          height 108px
          background-color #f5f5f5
        .bottom_info
          display flex
          align-items center
          justify-content center
          height 50px
          line-height 50px
          .flash_price
            font-size 14px
            color #b4282d
            margin-right 10px
          .old_price
            font-size 12px
            color #7f7f7f
            text-decoration line-through
</style>
