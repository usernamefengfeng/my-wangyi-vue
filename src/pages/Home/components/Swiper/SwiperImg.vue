<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in images" :key="index">
            <img :src="item"/>
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import '../../../../common/css/swiper.css'
  import Swiper from 'swiper'
  export default {

    data() {
      return {
        images: [
          'https://yanxuan.nosdn.127.net/bec4a597a9aed55605eeb7c0c7710f9b.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/981c28d7f7276a2c84bf8c7790a9b559.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/feadfbdcc0e2dea285d92c6740d46c66.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/791dda3ae432212164b1668b25fbd11c.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/5afff79cb85dfcd465e6da0d8404ddae.jpg?imageView&quality=75&thumbnail=750x0'
        ]
      }
    },

    mounted() {
      //轮播
      var mySwiper = new Swiper ('.swiper-container', {
        //direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            paginationType: 'custom',
        },
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .swiper-container
    width 100%
    height 200px
    .swiper-wrapper
      .swiper-slide
        img 
          width 100%
          height 100%
</style>
