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
    <ul class="flash_goods" v-if="homeData.flashSaleModule">
      <li v-for="(item, index) in homeData.flashSaleModule.itemList" :key="index">
        <img
          :src="item.picUrl"
          alt="picUrl"
          :data-src="item.picUrl"
          lazy="loaded"
        />
        <div class="bottom_info">
          <span class="flash_price">¥{{item.activityPrice}}</span>
          <span class="old_price">¥{{item.originPrice}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState({
      homeData:state => state.home.homeData
    })
  },
};
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
