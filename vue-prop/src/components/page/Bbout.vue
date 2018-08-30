<template>
  <div class="about">
    <h1 @click="fetch">这是子B组件</h1>
    <p>{{message}}</p>
  </div>
</template>
<script>
  import bus from '@/assets/js/bus.js'
  export default {
    name: "Bbout",
    data () {
      return {
        message: ''
      }
    },
    mounted () {
      let self = this
      // 在钩子函数中监听loginOut事件
      bus.$on('loginOut', (e) => {
        self.message = e
        console.log(`传来的数据是：${e}`)
      })
    },
    methods: {
      fetch () {
        bus.$emit("login", "传给A组件的数据")
      }
    }
  }
</script>
