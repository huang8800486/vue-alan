<template>
    <div class="parent">
        <div class="test">
            <span><button @click="changeTitle">更变标题</button> 标题为: {{moduleA.title}}</span>
            <span>{{moduleA.title}}</span>
            <span>点击数为:{{$store.state.moduleA.count}}, 为</span>
            <a href="javascript:;" @click="addA">+</a>
            <a href="javascript:;" @click="subA">-</a>
        </div>

        <div class="test">
            <span>{{moduleB.title}}</span>
            <span>点击数为:{{$store.state.moduleB.count}}, 为</span>
            <a href="javascript:;" @click="addB">+</a>
            <a href="javascript:;" @click="subB">-</a>
        </div>
        <div class="test">
            <span>{{moduleC.title}}</span>
            <span>点击数为:{{$store.state.moduleC.count}}, 为</span>
            <a href="javascript:;" @click="addC">+</a>
            <a href="javascript:;" @click="subC">-</a>
        </div>
        <div class="test">
            <span>{{moduleD.title}}</span>
            <span>点击数为:{{$store.state.moduleD.count}}, 为</span>
            <a href="javascript:;" @click="addD">+</a>
            <a href="javascript:;" @click="subD">-</a>
        </div>
        
        <div class="test">
            <!-- state方法 -->
            <span>{{moduleA.count}}</span>
            <span>{{moduleB.count}}</span>
            <span>{{moduleC.count}}</span>
            <span>{{moduleD.count}}</span>

            <!-- getter方法 -->
            <span>moduleA的getters方法: {{EvenOrOddA}}</span>
            <span>moduleB的getters方法: {{EvenOrOddB}}</span>
            <span>moduleC的getters方法: {{EvenOrOddC}}</span>
            <span>moduleD的getters方法: {{EvenOrOddD}}</span>

            
        </div>
    </div>
</template>

<script>
    import Vuex from "vuex";
    import { mapGetters, mapState } from 'vuex'
    export default {
        name: 'parent',
        data() {
            return {
               isTitle: false
            }
        },
        mounted(){
            console.log(Vuex)
            console.log(this.$store.state);
            console.log(this.$store.state.moduleA.count);
            console.log(this.$store.state.moduleB.count);
            console.log(this.$store.getters);
            console.log(this.$store.getters["moduleA/EvenOrOdd"]);
            console.log(this.$store.getters["moduleB/EvenOrOdd"]);
            console.log(this.$store.getters.EvenOrOddC);
            console.log(this.$store.getters.EvenOrOddD);
            
        },
        computed: {
            ...mapGetters({
                EvenOrOddA: 'moduleA/EvenOrOdd',
                EvenOrOddB: 'moduleB/EvenOrOdd',
                EvenOrOddC: 'EvenOrOddC',
                EvenOrOddD: 'EvenOrOddD',
                getStateC: 'getStateC',
                getStateD: 'getStateD'
            }),

            ...mapState([
                "moduleA",
                "moduleB",
                "moduleC",
                "moduleD"
            ])
        },
        methods:{
            changeTitle(){
                if(!this.isTitle){
                    this.$store.commit("moduleA/UPDATE_TITLE", "成功改变1")
                    this.isTitle = true;
                }else{
                    this.$store.commit("moduleA/UPDATE_TITLE", "成功改变2")
                    this.isTitle = false;
                }
                
            },
            addA(){
                this.$store.commit("moduleA/increment");
            },
            subA(){
                this.$store.commit("moduleA/decrement");
            },

            addB(){
                this.$store.commit("moduleB/increment");
            },
            subB(){
                this.$store.commit("moduleB/decrement");
            },

            addC(){
                this.$store.commit("moduleCincrement");
            },
            subC(){
                this.$store.commit("moduleCdecrement");
            },

            addD(){
                this.$store.commit("moduleDincrement");
            },
            subD(){
                this.$store.commit("moduleDdecrement");
            }
        },
        components: {
           
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.test{margin-bottom:10px;border:1px solid red;padding:20px 0;}
.test span{display:block;}
.test a{display: inline-block;width:30px;height:30px;color:#fff;background:blue;text-align:center;line-height:30px;text-decoration: none;font-size:18px;}
</style>
