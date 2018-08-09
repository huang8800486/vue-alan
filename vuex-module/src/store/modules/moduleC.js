export default {
    namespaced: false,
    
    // 状态
    state: {
        count: 2,
        title: "moduleC标题"
    },

    // 获取状态
    getters: {
        EvenOrOddC: state => state.count & 2 === 0 ? "偶数" : "奇数",
        getStateC (state){
            return state + "的"
        }
    },

    // 修改状态(同步)
    mutations: {
        moduleCincrement(state){
            state.count++;
        },

        moduleCdecrement(state){
            state.count--
        }
    }
}
