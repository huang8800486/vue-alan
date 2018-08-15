<template>
  <div id="app">
      <div>
          <img src="./assets/logo.png">
      </div>
    <div>
        <router-link to="Alan1">Alan1</router-link>
        <router-link to="/Alan2">如没登陆跳到login, 登陆跳到Alan2</router-link>
        <router-link :to="'Alan3'">Alan3</router-link>
        <router-link :to="'/Alan4'">Alan4</router-link>
        <router-link :to="'/user/foo'">{ username: 'foo'}</router-link>
        <router-link :to="'/user/bar'">{ username: 'bar' }</router-link>
        <router-link :to="'/user/foo/profile'">{ username: 'foo/profile' }</router-link>
        <a href="javascript:;" @click="goback">返回</a>
        <a href="javascript:;" @click="pushRouter">编程式的导航</a>
    </div>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
      return {

      }
  },
    mounted(){
        console.log(this.$router);
        console.log(this.$router.options.routes);       // 路由
    },
    methods: {
        goback(){
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
        },
        pushRouter(){
            this.$router.push({ path: '/Alan4' })
        }
    }
}
</script>

<style>

</style>
