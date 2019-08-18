<template>
  <header class="header_title">
    <div class="header-search" @click="$router.push('/search')">
      <img :src="'http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png'" alt="logo">
      <div class="search_box">
        <img :src="'http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png'" alt="放大镜">
        <span class="placeholder">搜索商品,共21612款好物</span>
      </div>
      <span class="login_btn">登录</span>
    </div>
    <div class="header_nav">
      <div class="header_nav_left">
        <ul class="nav_list" @click="addActive($event)">
          <li><a :class="{active: current===0}" data-this-index="0" href="javascript:;">推荐</a></li>
          <li><a :class="{active: current===1}" data-this-index="1" href="javascript:;">居家生活</a></li>
          <li><a :class="{active: current===2}" data-this-index="2" href="javascript:;">服饰鞋包</a></li>
          <li><a :class="{active: current===3}" data-this-index="3" href="javascript:;">美食酒水</a></li>
          <li><a :class="{active: current===4}" data-this-index="4" href="javascript:;">个户清洁</a></li>
          <li><a :class="{active: current===5}" data-this-index="5" href="javascript:;">母婴亲子</a></li>
          <li><a :class="{active: current===6}" data-this-index="6" href="javascript:;">运动旅行</a></li>
          <li><a :class="{active: current===7}" data-this-index="7" href="javascript:;">数码家电</a></li>
          <li><a :class="{active: current===8}" data-this-index="8" href="javascript:;">全球特色</a></li>
        </ul>
      </div>
      <div class="right_arrow" @click="isOpen = !isOpen">
        <img :src="'http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png'" alt="展开">
      </div>
      <div class="all_nav" v-show="isOpen">
        <p>全部频道</p>
        <ul class="all_nav_list">
          <li><a href="javascript:;">推荐</a></li>
          <li><a href="javascript:;">居家生活</a></li>
          <li><a href="javascript:;">服饰鞋包</a></li>
          <li><a href="javascript:;">美食酒水</a></li>
          <li><a href="javascript:;">个户清洁</a></li>
          <li><a href="javascript:;">母婴亲子</a></li>
          <li><a href="javascript:;">运动旅行</a></li>
          <li><a href="javascript:;">数码家电</a></li>
          <li><a href="javascript:;">全球特色</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script type="text/ecmascript-6">
  // import Bscroll from 'better-scroll'
  export default {
    data() {
      return {
        isOpen: false, //打开搜索下拉框的标识
        current: 0,  //定义点击选中的下标标识
      }
    },

    /* mounted() {
      this.$nextTick(() => {
        if (!this.Bscroll) {
          this.bscroll = new Bscroll('.header_nav_left',{
            click: true,
            scrollX: true
          })
        } else {
          this.bscroll.refresh()
        }
      })
    }, */

    methods: {
      addActive (event) {
        this.current = event.target.dataset.thisIndex
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .header_title
    position fixed
    width 100%
    height 72px
    .header-search
      display flex
      padding 8px 15px
      >img 
        width 68px
        height 20px
        margin 4px 10px 0 0
      .search_box
        padding 0 16px
        width 53%
        display flex
        vertical-align middle
        height 28px
        background-color #eee
        border-radius 4px
        font-size 14px
        color #666
        flex-flow row nowrap
        -webkit-box-align: center
        align-items center
        -webkit-box-pack center
        justify-content center
        >img 
          width 14px
          height 14px
          margin-right 6px
      .login_btn
        margin 5px 0
        width 34px
        height 18px
        line-height 18px
        font-size 12px
        text-align: center
        color: #b4282d
        border: 1px solid #b4282d
        border-radius: 4px
        margin-left: 8px
    .header_nav
      position relative
      padding-top 10px
      z-index: 2
      background: #fff
      margin-top -5px
      .header_nav_left
        padding-right 10px
        width 80%
        height 100%
        .nav_list
          display: flex;
          white-space nowrap
          background-color: #fff;
          overflow hidden
          li
            width 150px
            margin-left 22px
            font-size 14px
            font-weight bold
            a
              color #666
      .right_arrow
        position absolute
        right 18px
        bottom 157px
        img 
          width 15px
          height 15px
      .all_nav
        position: relative
        z-index: 2
        background: #fff
        margin-top: -14px
        p
          height: 14px
          line-height: 14px
          padding-left: 14px
          font-size: 14px
        .all_nav_list
          padding 16px 14px 0
          width 100%
          overflow hidden
          float left
          li
            float left
            width 75px
            height 26px
            line-height 26px
            border 1px solid #FAFAFA
            margin 5px 12px 14px 0
            border-radius 2px
            text-align center
            background-color #eee
            font-size 12px
            a
              color #333
            &.active
              border 1px solid #b4282d
</style>
