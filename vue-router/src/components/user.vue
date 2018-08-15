<template>
    <div class="Alan">
        这是user页面{{ $route.params.id }}
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },

        mounted() {
            console.log(this.$route.params.id)
        },
        // watch: {
        //     '$route' (to, from) {
        //         console.log("from从哪里来: ",  from)
        //         console.log("to到哪里去: ",  to)
        //     }
        // }

        //当进入组件之前，执行 beforRouteEnter 路由钩子函数
        beforeRouteEnter(to,from,next){
            console.log('beforRouteEnter')
            console.log(this) // 结果为undefined，因为在执行beforRouteEnter时候，组件还没有被创建出来；先执行beforRouteEnter，再执行beforeCreate
            next()
        },
        // 响应路由参数的变化
        beforeRouteUpdate(to,from,next){
            console.log("from从哪里来: ",  from)
            console.log("to到哪里去: ",  to)
            next()
        },
        //离开组件的时候触发
        beforeRouteLeave(to,from,next){
            //什么都不写的时候，不会离开(走下一步)
            const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
            if (answer) {
                next()
            } else {
                next(false)
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
