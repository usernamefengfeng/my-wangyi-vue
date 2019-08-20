<template>
  <div class="popular_box">
    <div class="popular_header">
      <span class="popular_title">人气推荐</span>
      <span class="popular_more">更多 ></span>
    </div>
    <ul class="popular_goods">
      <li v-for="(item, index) in homeData.popularItemList" :key="index">
        <img
          :src="item.primaryPicUrl"
          alt="人气推荐"
          :data-src="item.primaryPicUrl"
          lazy="loaded"
        />
        <div class="popular_info">
          <span class="popular_name">{{item.name}}</span>
          <br />
          <span class="popular_desc">{{item.simpleDesc}}</span>
          <br />
          <span class="popular_price">¥{{item.retailPrice}}</span>
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
      homeData: state => state.home.homeData
    })
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .popular_box
    width 96%
    padding-bottom 54px
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
