<template>
  <div class="After">
    <div class="error" v-if="error">
      <span>{{error}}</span>
    </div>
    <div class="after" v-if="after">
      <h2>{{ after.name }}</h2>
      <p>{{ after.age }}</p>
    </div>
  </div>
</template>

<script>
  import "@/assets/css/index.styl"
  import axios from "axios"
  export default {
    name: 'After',
    data() {
      return {
        error: null,
        after: null
      }
    },
    beforeRouteEnter (to, prev, next) {
      axios.get("static/js/data.json", {})
      .then((res) =>{
        next(vm => vm.setData(res))
      })
    },
    // 路由改变前，组件就已经渲染完了
    // 逻辑稍稍不同
    beforeRouteUpdate (to, prev, next) {
      this.after = null
      axios.get("static/js/data.json", {})
      .then((res) =>{
        this.setData(res)
        next()
      })
    },
    methods: {
      setData(res) {
        this.after = res.data[0]
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .loading {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    span {
      position: absolute;
      left 0;
      right 0;
      top 0;
      bottom 0;
      margin: auto;
      width: 120px;
      color: #fff;
      height: 120px;
      text-align: center;
      line-height: 120px;
      background: rgba(0, 0, 0, .5);
      border-radius: 10px;
    }
  }

  .error{
    position:relative;
    z-index:10;
  }

</style>
