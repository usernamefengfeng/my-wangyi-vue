<template>
  <div class="shopcar_box">
    <div class="top_search">
      <label class="input_label">
        <div class="scale_img">
          <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png" alt="搜索" />
        </div>
        <div class="clear_img" v-if="userInput" @click="userInput=''">X</div>
        <input @keyup.enter="searchTo" v-model="userInput" type="text" :placeholder="'你的幸福从这里开始'" />
      </label>
      <span class="right_back" @click="$router.back()">取消</span>
  
      <div class="result_show" v-if="userInput">
        <ul>
          <li v-for="(item, index) in searchResult.goods" :key="index">
            {{item.name}}
          </li>
        </ul>
      </div>
    </div>
    <div class="bottom_title">热门搜索</div>
    <ul>
      <li v-for="(keyWord, index) in keywords" :key="index">
        <a :class="{active: curIndex===index-3}" href="javascript:">
          {{keyWord}}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default {
    data (){
      return {
        curIndex: 3,
        userInput: "",
        timerId: null
      }
    },
    computed: {
      ...mapState({
        searchData: state=>state.home.searchData,
        searchResult: state=>state.home.searchResult
      }),
      keywords () {
        let arrs = []
        if(this.searchData.hotKeywordVOList){
          arrs = this.searchData.hotKeywordVOList.reduce((arr, next)=>{
            const word = next.keyword;
            arr.push && arr.push(word)
            return arr
          }, [])
        }
        return arrs
      }
    },
    methods: {
      searchTo () {
        clearTimeout(this.timerId)
        this.timerId = setTimeout(async ()=>{
          await this.$store.dispatch('getSearchResult', this.userInput)
          console.log('111')
        }, 300)
      }
    },
    async mounted () {
      await this.$store.dispatch("getSearchData")
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  .shopcar_box
    width 100%
    height 600px
    .top_search
      position relative
      width 345px
      height 28px
      margin 10px 0 0 15px
      font-size 0
      display flex
      align-items center
      .result_show
        position absolute
        left 0
        bottom 0
        z-index 1
        width 375px
        min-height 629px
        box-sizing border-box
        transform translate(-15px ,100%)
        background-color: #f4f4f4
        >ul
          width 100%
          padding 0 15px
          box-sizing border-box
          background-color: #fff
          >li
            width 100%
            height 45px
            border-bottom  1px solid #eee
            font-size 14px
            line-height 60px
      .input_label
        position relative
        width 100%
        height 100%
        .clear_img
          position absolute
          top 7px
          right 14px
          width 14px
          height 14px
          border-radius 50%
          line-height: 14px;
          text-align: center;
          font-size: 14px;
          color #f2f2f2
          background-color: #888
        .scale_img
          position absolute
          width 30px
          height 100%
          background-color: #f4f4f4
          display flex
          align-items center
          justify-content center
          >img
            width 14px
            height 14px
        >input
          display block
          width 276px
          height 100%
          padding-left 30px
          outline none
          border 0 none
          margin 0
          background-color #f4f4f4
          font-size 14px
      .right_back
        width 33px
        font-size 14px
        color #333
    .bottom_title
      padding 15px 0 0 15px
      font-size 14px
      color #999
    >ul
      padding 15px 0 0 15px
      font-size 14px
      display flex
      flex-wrap wrap
      >li
        margin 0 16px 16px 0
        a
          margin-right 16px
          padding 4px 7px
          border 1px solid #999
          height 23px
          line-height 23px
          text-align center
          font-size 14px
          &.active
            border-color $themeColor
</style>
