<template>
  <div class="findGoods">
    <div class="header-tab">
      <ul class="tab-list">
        <li class="tab-item" v-for="(item, index) in liArr" :key="index"
            :class="{active: currentIndex === index}" @click="addTo(index,`/seeGoods/findGoods/${index}`)">
          <router-link :to="`/seeGoods/findGoods/${index}`">{{item}}</router-link>
        </li>
      </ul>
    </div>
    <div class="min-container">
      <div class="max-content">
        <!-- <SwiperImg/> -->
        <SwiperImg v-if="this.currentIndex===0"/>
        <CategoryOne v-if="this.currentIndex===1"/>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Bscroll from 'better-scroll'
  import SwiperImg from './components/SwiperImg/SwiperImg'
  import CategoryOne from './components/CategoryOne/CategoryOne'
  export default {
    data() {
      return {
        liArr: ['盛夏特别版','推荐','好货内部价','回购榜','晒单','开发者日记','达人','HOME'],
        currentIndex: 0,
      }
    },

    methods: {
      addTo (index,path) {
        this.currentIndex = index
        this.$router.push(path)
      }
    },

    // watch: {
    //   deep: true,
    //   currentIndex: function () {
    //     this.$router.push(`/seeGoods/findGoods/${currentIndex}`)
    //     console.log('1111')
    //   }
    // },

    mounted() {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new Bscroll('.header-tab',{
            click: true,
            scrollX: true
          })
        } else {
          this.scroll.refresh()
        }
      })
    },

    components: {
      SwiperImg,
      CategoryOne,
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .findGoods
    width 100%
    height 100%
    box-sizing border-box
    .header-tab
      width 100%
      height 36px
      background #fafafa
      border-bottom .5px solid #d9d9d9
      box-sizing border-box
      overflow hidden
      position fixed
      top 50px
      left 0
      z-index 20
      .tab-list
        height 36px
        width 600px
        padding-bottom .2rem
        white-space nowrap
        overflow-y hidden
        overflow-x auto
        .tab-item
          height 100%
          line-height 36px
          font-size 14px
          display inline-block
          box-sizing: border-box;
          color #7F7F7F
          padding 0 4px
          margin 0 10px
          vertical-align middle
          &.active
            color #B4282D
            border-bottom 2px solid #B4282D
    .min-container
      width 100%
      height 100%
      box-sizing border-box
      padding-top 87px
</style>
