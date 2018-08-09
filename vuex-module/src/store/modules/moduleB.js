export default {
    namespaced: true,
    
    // 状态
    state: {
        count: 1,
        title: "moduleB标题"
    },

    // 获取状态
    getters: {
        EvenOrOdd: state => state.count & 2 === 0 ? "偶数" : "奇数",
        getState (state){
            return state + "的"
        }
    },

    // 修改状态(同步)
    mutations: {
        increment(state){
            state.count++;
        },

        decrement(state){
            state.count--
        }
    }
}
