<template>
  <div name="m-index" class="container">
    <header-top></header-top>
    <transition name="tran">
      <router-view></router-view>
    </transition>
    <footer-bottom></footer-bottom>
  </div>
</template>

<script>
  import HeaderTop from '@/components/include/headerTop'
  import FooterBottom from '@/components/include/footerBottom'
  export default {
    name: "index",
    components: {
      HeaderTop,
      FooterBottom
    }
  }
</script>
<style lang="stylus" scoped>

</style>