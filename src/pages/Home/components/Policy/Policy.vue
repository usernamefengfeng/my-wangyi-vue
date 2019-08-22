<template>
  <div class="user_nav">
    <ul v-if="homeData.kingKongModule">
      <li v-for="(item, index) in homeData.kingKongModule.kingKongList" :key="index">
        <a href="javascript:">
          <img :src="item.picUrl" alt="居家" v-lazy="item.picUrl">
          <p>{{item.text}}</p>
        </a>
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
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  .user_nav
    ul
      display flex
      flex-wrap wrap
      margin-bottom 20px
      li
        width 55px
        height 78px
        margin 5px 10px 0
        a
          width 100%
          height 100%
          display flex
          flex-direction column
          justify-content center
          align-items center
          img
            width 55px
            height 55px
          p
            font-size 12px
            line-height 18px
            color #333
</style>
