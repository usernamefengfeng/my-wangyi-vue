<template>
  <div class="my_split">
    <img
      src="https://yanxuan.nosdn.127.net/a13e54e6f22d3407bba3daf269283edc.png"
      alt="品类展示"
      data-src="https://yanxuan.nosdn.127.net/a13e54e6f22d3407bba3daf269283edc.png"
    />
    <div class="goods_wrapper goods_wrapper_7">
      <ul class="good_ul">
        <li v-for="(item, index) in homeData.personalShop" :key="index">
          <img
            :src="item.listPicUrl"
            v-lazy="item.listPicUrl"
            class="good_img"
          />
          <span class="good_name line_two_point">{{item.name}}</span>
          <span class="good_price">¥{{item.retailPrice}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Bscroll from 'better-scroll'
import {mapState} from 'vuex'
export default {
  mounted() {
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new Bscroll('.goods_wrapper',{
          click: true,
          scrollX: true
        })
      } else {
        this.scroll.refresh()
      }
    })
  },

  computed: {
    ...mapState({
      homeData: state => state.home.homeData
    })
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .my_split
    img 
      width 100%
      height 185px
    .goods_wrapper
      width 100%
      overflow hidden
      .good_ul
        float left
        display flex
        li
          float left
          width 100px
          height 166px
          margin-right 10px
          font-size 12px
          line-height 18px
          background-color: #fff
          .good_img
            width 100px
            height 100px
            background-color: #f4f4f4
            margin-bottom 5px
          .good_name
            color #000
            display block
            height 36px
          .good_price
            color $themeColor
</style>
