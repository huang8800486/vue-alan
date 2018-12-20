import Vue from 'vue'
import Vuex from 'vuex'
import regExp from './regExp'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
		regExp,
  }
})
