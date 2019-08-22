<template>
  <div class="category-modules">
    <div class="cate-header">
      <div class="cate-input">
        <div class="input-content" @click="$router.replace('/searchGoods')">
          <i class="iconfont icon-fangdajing1"></i>
          <span class="input-text">搜索商品,共21525款商品</span>
        </div>
      </div>
    </div>
    <div class="cat-content">
      <div class="left-nav" ref="leftNav">
        <ul>
          <li class="nav-item" v-for="(item, index) in categorysData.categoryL1List" :key="index"
              @click="goTo(index,'/categoryList?categoryId='+index)">
              <router-link :class="{active:currentIndex === index}" :to="'/categoryList?categoryId='+index">{{item.name}}</router-link>
              
          </li>
        </ul>
      </div>
      <div class="right-content">
        <div class="right-container">
          <img src="https://yanxuan.nosdn.127.net/5b4ca33a0205482398006405c1db15e8.jpg?imageView&amp;thumbnail=0x196" alt="img">
          <ul class="right-ul">
            <li class="right-item" v-for="(item, index) in categorysData.categoryL2List" :key="index">
              <div class="img-item">
                <img :src="item.bannerUrl" alt="img" v-lazy="item.bannerUrl">
              </div>
              <span>{{item.name}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Bscroll from 'better-scroll'
  import { mapState } from 'vuex';
  export default {
    data() {
      return {
        // navItems: ['推荐专区','夏凉专区','爆品专区','新品专区','居家生活','服饰鞋包','美食酒水','个户清洁','母婴亲子','运动旅行','数码家电','全球特色'],
        currentIndex: 0
      }
    },

    computed: {
      ...mapState({
        categorysData: state => state.categorys.categorysData
      })
    },

    methods: {
      goTo (index,path) {
        this.currentIndex = index
        this.$router.push(path)
        // console.log(this.$route.params)
        // console.log(this.$route.query)
      }
    },

    mounted() {
      this.$store.dispatch('getCategorysData')
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new Bscroll(this.$refs.leftNav,{
            click: true,
            scrollY: true
          })
        } else {
          this.scroll.refresh()
        }
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .category-modules
    width 100%
    height 100%
    .cate-header
      width 100%
      height 44px
      line-height 40px
      border-bottom 1px solid #ccc
      box-sizing border-box
      position relative
      .cate-input
        width 345px
        height 28px
        background #ededed
        position absolute
        left 50%
        top 50%
        transform translate(-50%,-50%)
        border-radius 2px
        .input-content
          position absolute
          left 50%
          top 50%
          transform translate(-50%,-50%)
          width 50%
          font-size 14px
          color #666
          .iconfont
            font-size 16px
    .cat-content
      width 100%
      height 574px
      border-bottom 1px solid #ccc
      .left-nav
        float left
        width 81px
        height 574px
        background #fff
        overflow hidden
        ul
          width 100%
          padding-top 25px
          height 575px
          .nav-item
            width 100%
            height 25px
            text-align center
            padding 10px 0
            a
              white-space: nowrap
              font-size: 14px
              text-overflow: ellipsis
              overflow: hidden
              display block
              color #333
              &.active
                color #B4282D
      .right-content
        width 375px
        height 574px
        .right-container
          width 100%
          img 
            width 264px
            height 96px
            margin 15px
          .right-ul
            width 264px
            display flex
            flex-wrap wrap
            margin-left 90px
            .right-item
              width 72px
              height 108px
              margin-right 12px
              .img-item
                img
                  width 72px
                  height 72px
                  border-radius 50%
              span 
                display block
                width 72px
                height 36px
                text-align center
                font-size 12px
</style>
