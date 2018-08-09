export default {
    namespaced: false,
    
    // 状态
    state: {
        count: 3,
        title: "moduleD标题"
    },

    // 获取状态
    getters: {
        EvenOrOddD: state => state.count & 2 === 0 ? "偶数" : "奇数",
        getStateD (state){
            return state + "的"
        }
    },

    // 修改状态(同步)
    mutations: {
        moduleDincrement(state){
            state.count++;
        },

        moduleDdecrement(state){
            state.count--
        }
    }
}
