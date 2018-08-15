<template>
    <div class="post">
        <div class="loading" v-if="loading">
            <span>Loading...</span>
        </div>
        <div class="error" v-if="error">
            <span>{{error}}</span>
        </div>

        <div class="post" v-if="post">
            <h2>{{ post.title }}</h2>
            <p>{{ post.body }}</p>
        </div>
    </div>
</template>
<script>
    import "@/assets/css/index.styl"
    import axios from "axios"
    export default {
        name: 'Post',
        data() {
            return {
                loading: false,
                error: null,
                post: null
            }
        },
        // 组件创建完后获取数据，
        // 此时 data 已经被 observed 了
        created(){
            this.fetchData();
        },
        watch: {
            '$route': 'fetchData'
        },

        methods: {
            fetchData(){
                axios.get().then((res) => {
                    console.log(res)
                })
                this.error = this.post = null
                this.loading = true
                axios.get("src/assets/js/data.json", {}).then((res) => {
                    console.log(res)
                });
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
            position absolute;
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

</style>
