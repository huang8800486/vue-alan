<template>
  <div class="about">
    <h1 @click="fetch">这是子A组件</h1>
    <p>接收父组件的数据: <em style="color:red">{{parentData}}</em></p>
    <p>{{message}}</p>
    <a href="javascript:;" @click="sendMsg">向父组件传参</a>
  </div>
</template>
<script>
  import bus from '@/assets/js/bus.js'
  export default {
    name: "about",
    data () {
      return {
        message: ''
      }
    },
    props: {
      parentData: {
        type: String
      }
    },
    mounted () {
      let seft = this
      bus.$on("login", (e) => {
        seft.message = e
        console.log(`传来的数据是：${e}`)
      })
    },
    methods: {
      // 添加一个 触发 #emit的事件按钮
      fetch () {
        bus.$emit('loginOut', "传给B组件的数据")
      },
      sendMsg () {
        console.log(true)
        this.$emit("callback", "子组件的参数")
      }
    }
  }
</script>
