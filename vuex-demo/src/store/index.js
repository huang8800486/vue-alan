import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
// 状态
const state = {
    count: 0
}

// 获取状态
// 请当做 计算属性来写，所有的 getter, 接收 完整的state树，做第一个参数
const getters = {
    evenOrOdd: state => state.count % 2 == 0 ? "偶数" : "奇数"
}

// 修改状态(同步)
// 当执行程序时 state 突然发生变化之行为，称为 mutations
const mutations = {
    increment(state){
        state.count++
    },

    decrement(state){
        state.count--
    }
}

// 异步修改状态
// action 不改变状态，只提交(commit) mutation。
// action 可以包含任意异步操作。
const actions = {
    increment: ({
        commit
    }) => commit("increment"),

    decrement: ({
        commit
    }) => commit("decrement")
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})