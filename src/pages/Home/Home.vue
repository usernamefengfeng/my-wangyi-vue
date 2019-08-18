<template>
  <div class="home-container">
    <HeaderTitle/>
  </div>
</template>

<script type="text/ecmascript-6">
  import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'
  export default {
    components: {
      HeaderTitle,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home-container
    padding-bottom 100px
</style>
