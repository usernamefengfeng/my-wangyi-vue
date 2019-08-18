<template>
  <div class="home-container">
    <HeaderTitle/>
    <div class="home-main">
      <div class="home-content" style="padding-top: 74px">
        <SwiperImg/>    <!--轮播图-->
        <div class="servicePolicy">
          <ul>
            <li class="item">
              <a href="javascript:">
                <i class="iconfont icon-yi-copy"></i> <span class="text">网易自营品牌</span>
              </a>
            </li>
            <li class="item">
              <a href="javascript:">
                <i class="iconfont icon-icon-icon-duihao"></i> <span class="text">30天无忧退货</span>
              </a>
            </li>
            <li class="item">
              <a href="javascript:">
                <i class="iconfont icon-qian5"></i> <span class="text">48小时快速退款</span>
              </a>
            </li>
          </ul>
        </div>
        <Policy/>
        <Split/>
        <NewCouple/>
        <Split/>
        <CategoryModule/>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'  //头部搜索
  import SwiperImg from './components/Swiper/SwiperImg' //轮播图
  import Policy from './components/Policy/Policy'  //主导航区
  import NewCouple from './components/NewCouple/NewCouple'  //新人专享礼
  import CategoryModule from './components/CategoryModule/CategoryModule'  //商品模块
  export default {
    components: {
      HeaderTitle,
      SwiperImg,
      Policy,
      NewCouple,
      CategoryModule,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home-container
    padding-bottom 100px
    .home-main
      .home-content
        .servicePolicy
          background-color #FFFFFF
          color $themeColor
          ul
            box-sizing border-box
            width 100%
            height 36px
            padding 0 15px
            display flex
            justify-content center
            li
              display flex
              justify-content center
              align-items center
              margin-right 10px
              a
                color $themeColor
                display flex
                justify-content center
                align-items center
                .iconfont
                  font-size 18px
                  margin-left 5px
                  color red
                .text
                  font-size 12px
                  margin-left 4px
                  line-height 16px
                  vertical-align middle
</style>
