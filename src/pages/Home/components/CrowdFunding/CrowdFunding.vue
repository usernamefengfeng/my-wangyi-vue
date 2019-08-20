<template>
  <div class="zhong_chou_box">
    <div class="z_chou_header">
      <span class="z_chou_title">众筹</span>
      <span class="z_chou_more">更多 ></span>
    </div>
    <ul class="z_chou_goods" v-if="homeData">
      <li v-for="(item, index) in homeData.zhongChouList" :key="index">
        <img
          :src="item.picUrl"
          alt="新品"
          :data-src="item.picUrl"
          lazy="loaded"
        />
        <div class="z_chou_info">
          <div class="z_chou_title">{{item.name}}</div>
          <div class="z_chou_price">{{item.showRetailPrice}}</div>
          <div class="z_chou_p_box">
            <div class="z_chou_progress">
              <div class="bg" style="width: 216%;"></div>
            </div>
            <div class="z_chou_percent">{{item.progress}}%</div>
          </div>
          <div class="z_chou_supportNum">{{item.supportNum}}</div>
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
