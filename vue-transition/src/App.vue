<template>
  <div id="app">
    <header-top></header-top>
    <transition :name="transitionName">
        <router-view class="child-view"/>
    </transition>
  </div>
</template>

<script>
import HeaderTop from "./components/common/header"
export default {
  name: 'App',
  data() {
      return {
          transitionName: "slide-left"
      }
  },
  watch: {
    '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  components: {
    HeaderTop
  }
}
</script>

<style>
*{padding:0;margin:0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
  margin:0 auto;
  padding-top:40px;
  overflow:hidden;
}
.child-view { 
    position:absolute;left:0;top:40px;
    -webkit-transition: all 0.3s linear; 
    transition: all 0.3s linear; 
 } 
.slide-left-enter, .slide-right-leave-active {
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0); 
 } 
.slide-left-leave-active, .slide-right-enter {
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0); 
}
</style>
