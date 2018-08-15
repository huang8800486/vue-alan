<template>
    <div class="header">
        <router-link :to="'/index'">index</router-link>
        <router-link :to="'/trade/trade'">trade</router-link>
        <router-link :to="'/trade/qd'">qd</router-link>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header{width:100%;height:40px;line-height:40px;background:#000;position:fixed;left:0;top:0;color:#fff;overflow:hidden;}
    .header a{float:left;padding:0 20px;line-height:40px;color:#fff;}
</style>
