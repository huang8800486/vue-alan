import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'
import moduleC from './modules/moduleC'
import moduleD from './modules/moduleD'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        moduleA,
        moduleB,
        moduleC,
        moduleD
    }
})
