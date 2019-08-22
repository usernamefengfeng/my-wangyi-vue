<template>
  <div class="content-one">
    <div class="content-img">
      <div class="img-one">
        <img v-lazy="'https://yanxuan.nosdn.127.net/15639572098632760.jpeg'" alt="识物">
      </div>
      <div class="img-two">
        <img v-lazy="'https://yanxuan.nosdn.127.net/15656868015315337.jpg?_width=750&_height=344'" alt="识物">
      </div>
      <div class="img-three">
        <img v-lazy="'https://yanxuan.nosdn.127.net/15656886328485352.jpeg'" alt="识物">
      </div>
    </div>
    <div class="swiper-module">
      <div class="swiper-img">
        <div class="swiper-container-max">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in itemsImg" :key="index">
              <img :src="item" alt="">
            </div>
          </div>
        </div>
        <div class="swiper-container-min">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in itemsImg" :key="index">
              <img :src="item" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="img-cont">
      <img src="https://yanxuan.nosdn.127.net/15645393458728772.jpeg" alt="">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import '../../../../../../common/css/swiper.css'
  import Swiper from 'swiper'
  // import {mapState} from 'vuex'
  export default {
    data() {
      return {
        itemsImg: [
          'https://yanxuan.nosdn.127.net/15639572098632760.jpeg',
          'https://yanxuan.nosdn.127.net/15639572098632760.jpeg',
          'https://yanxuan.nosdn.127.net/15639572098632760.jpeg',
          'https://yanxuan.nosdn.127.net/15639572098632760.jpeg',
          'https://yanxuan.nosdn.127.net/15639572098632760.jpeg',
          'https://yanxuan.nosdn.127.net/15639572098632760.jpeg',
          'https://yanxuan.nosdn.127.net/15639572098632760.jpeg',
        ]
      }
    },
    // props:{
    //   currentIndex: Number
    // },

    mounted() {
      // var mySwiper = new Swiper('.swiper-container', {
      //   thumbs: {
      //     swiper: {
      //       el: '.swiper-container-thumbs', //注意此处的设置方式
      //       slidesPerView: 5,
            
      //     }
      //   }
      // });

      var gallerySwiper = new Swiper('.swiper-container-max',{
        spaceBetween: 8,
        thumbs: {
          swiper: {
            el: '.swiper-container-min',
            spaceBetween: 6,
            slidesPerView: 5,
            watchSlidesVisibility: true,/*避免出现bug*/
          },
        }
      })

    },  
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .content-one
    width 100%
    //box-sizing border-box
    padding-bottom 47px
    .content-img
      width 100%
      .img-one
        width 100%
        height 121px
        margin auto
        overflow hidden
        font-size 0
        img
          width 100%
          height 121px
      .img-two
        width 100%
        height 172px
        margin auto
        overflow hidden
        font-size 0
        img
          width 100%
          height 172px
      .img-three
        width 100%
        height 85px
        margin auto
        overflow hidden
        font-size 0
        img
          width 100%
          height 85px
    .swiper-module
      width 100%
      height 302px
      .swiper-img
        width 375px
        height 302px
        padding 0 5px
        box-sizing border-box
        .swiper-container-max
          width 100%
          height 225px
          overflow hidden
          .swiper-wrapper
            .swiper-slide
              img
                width 100%
                height 100%
        .swiper-container-min
          width 100%
          height 77px
          box-sizing border-box
          padding 7px 5px
          overflow hidden
          .swiper-wrapper
            height 63px
            .swiper-slide
              width 63px
              height 63px
              margin-right 2px
              display inline-block
              font-size 0
              border-radius 3px
              img
                width 100%
                height 100%
    .img-cont
      width 100%
      height 85px
      overflow hidden
      img 
        width 100%
        height 100%
</style>
