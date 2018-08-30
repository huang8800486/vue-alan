<template>
  <div class="bout">
    <h1>父组件</h1>
    <span>接收子组件传上来的数据: <em style="color:red">{{childMsg}}</em></span>
    <about :parentData="msg" v-on:callback="headCall"></about>
    <bbout></bbout>
  </div>
</template>
<script>
  import about from '@/components/page/About'
  import bbout from '@/components/page/Bbout'
  export default {
    name: "bout",
    data () {
      return {
        msg: '我是父组件参数',
        message: '',
        childMsg: ''
      }
    },
    components: {
      about,
      bbout
    },
    methods: {
      headCall (msg) {
        console.log(msg)
        this.childMsg = msg
      }
    }
  }
</script>
