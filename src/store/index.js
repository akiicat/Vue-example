import Vue from 'vue'
import Vuex from 'vuex'
// root
import * as getters from './getters.js'
// modules
import { state, actions, mutations } from './root.js'
import count from './modules/count'
import todo from './modules/todo'
import shop from './modules/shop'
import opendata from './modules/opendata'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  state,
  actions,
  mutations,
  modules: {
    count,
    todo,
    shop,
    opendata
  },
  // 嚴格模式，禁止直接修改 state
  strict: true
})
