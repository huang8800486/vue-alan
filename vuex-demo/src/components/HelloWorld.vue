<template>
    <div class="parent">
        <div class="test">
            <span>使用...mapGetters, ...mapActions获取actions的计算</span>
            <span>点击数为: {{ $store.state.count }}, 为{{ evenOrOdd }}</span>
            <a href="javascript:;" @click="increment">+</a>
            <a href="javascript:;" @click="decrement">-</a>
        </div>
        
        <div class="test">
            <span>使用...mapGetters, ...mapState, this.$store.commit("increment")</span>
            <span>点击数为: {{ count }}, 为{{ evenOrOdd }}</span>
            <a href="javascript:;" @click="add">+</a>
            <a href="javascript:;" @click="sub">-</a>
        </div>
        
    </div>
</template>

<script>
    import { mapGetters, mapState, mapActions } from 'vuex'

    export default {
        name: 'parent',
        data() {
            return {
               
            }
        },
        computed: {
            // 获取getters里的属性
            ...mapGetters([
                "evenOrOdd"
            ]),

            // 获取state里的属性, 这样获取后, html上面就直接使用{{ count }}获取, 不用{{ $store.state.count }}
            ...mapState([
                "count"
            ])
        },
        methods:{
            // 获取actions的计算
            ...mapActions([
                "increment",
                "decrement"
            ]),

            add(){
                this.$store.commit("increment");
            },

            sub(){
                this.$store.commit("decrement");
            }
        },
        components: {
           
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.test{margin-bottom:10px;border:1px solid red;}
.test span{display:block;}
.test a{display: inline-block;width:30px;height:30px;color:#fff;background:blue;text-align:center;line-height:30px;text-decoration: none;font-size:18px;}
</style>
