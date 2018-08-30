<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png">
    <h1 @click="setLan">{{msg}}</h1>
  </div>
</template>
<script>
  export default {
    name: "home", 
    data () {
      return {
        msg: "This is an home page"
      }
    },
    methods: {
      setLan () {
        this._COOKIE.setCookie('lan', "en")
        console.log(document.cookie.split(";"))
        console.log(this._COOKIE.getCookie('lan'))
        console.log(this._COOKIE.removeCookie('lan'))
        console.log(document.cookie.split(";"))
      }
    }
  }
</script>
