<template>
  <div class="scene_light">
    <ul>
      <li>
        <p class="title">实时好评榜</p>
        <p class="desc">精选优质好物</p>
        <div>
          <img src="http://yanxuan.nosdn.127.net/e4092e675f895740f8e079980e8ebe63.png" alt=""
            data-src="http://yanxuan.nosdn.127.net/e4092e675f895740f8e079980e8ebe63.png" lazy="loaded">
          <img src="http://yanxuan.nosdn.127.net/6725890e905c4d51e333485f3a934192.png" alt=""
            data-src="http://yanxuan.nosdn.127.net/6725890e905c4d51e333485f3a934192.png" lazy="loaded">
        </div>
      </li>
      <li>
        <p class="title">新品热销榜</p>
        <p class="desc">好物抢先体验</p>
        <div>
          <img src="http://yanxuan.nosdn.127.net/780b2fc0c98fac7b2862a8a111ee615f.png" alt=""
            data-src="http://yanxuan.nosdn.127.net/780b2fc0c98fac7b2862a8a111ee615f.png" lazy="loaded">
          <img src="http://yanxuan.nosdn.127.net/77bf1ff658f8557391f1b3204cb8ab3b.png" alt=""
            data-src="http://yanxuan.nosdn.127.net/77bf1ff658f8557391f1b3204cb8ab3b.png" lazy="loaded">
        </div>
      </li>
      <li>
        <p class="title">严选线下店首家</p>
        <p class="desc">体验选式美学</p>
        <div>
          <img src="http://yanxuan.nosdn.127.net/a07c82f8b26a4ed42b1d697eb9ea418f.png" alt=""
            data-src="http://yanxuan.nosdn.127.net/a07c82f8b26a4ed42b1d697eb9ea418f.png" lazy="loaded">
          <img src="http://yanxuan.nosdn.127.net/d1d2488296c5e75967ebfbdf8a36d6cc.png" alt=""
            data-src="http://yanxuan.nosdn.127.net/d1d2488296c5e75967ebfbdf8a36d6cc.png" lazy="loaded">
        </div>
      </li>
      <li>
        <p class="title">12月必买好物</p>
        <p class="desc">冬日小确幸指南</p>
        <div>
          <img src="http://yanxuan.nosdn.127.net/362a8249b48d91d99604680b5471b507.png" alt=""
            data-src="http://yanxuan.nosdn.127.net/362a8249b48d91d99604680b5471b507.png" lazy="loaded">
          <img src="http://yanxuan.nosdn.127.net/e1d2f0b529eddc9b645997d0f16e9aca.png" alt=""
            data-src="http://yanxuan.nosdn.127.net/e1d2f0b529eddc9b645997d0f16e9aca.png" lazy="loaded">
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .scene_light
    ul
      display flex
      flex-wrap wrap
      justify-content center
      li
        position relative
        width 176px
        height 130px
        box-sizing border-box
        margin: 2px 0 0 2px
        padding: 10px 0 0 10px
        border-radius 4px
        background-color #F5F5F5
        .title
          padding-left 5px
          box-sizing border-box
          color #333
          font-size 16px
        .desc
          margin-top 5px
          margin-bottom 5px
          padding-left 5px
          box-sizing border-box
          color #7f7f7f
          font-size 12px
        >div
          display flex
          justify-content center
          img
            width 75px
            height 75px
            margin-right 2px
</style>