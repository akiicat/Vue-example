import Vue from 'vue'
import Vuex from 'vuex'
// root
import * as getters from './getters.js'
// modules
import count from './modules/count'
import todo from './modules/todo'
import shop from './modules/shop'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    count,
    todo,
    shop
  },
  // 嚴格模式，禁止直接修改 state
  strict: true
})
