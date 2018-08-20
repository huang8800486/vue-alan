<template>
  <div id="app">
    <img src="./assets/logo.png">
    <header-top></header-top>
    <router-view/>
  </div>
</template>

<script>
import HeaderTop from './components/common/headerTop'
export default {
  name: 'App',
  components: {
    HeaderTop
  }
}
</script>

<style>
body{background:#999;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 400px;
  background:red;
}
</style>
