// types
const types = {
  INCREASE: 'INCREASE',
  DECREASE: 'DECREASE',
  COUNT_RESET: 'COUNT_RESET'
}

// state
const state = {
  count: 0
}

// getter
const getters = {
  getCount: state => state.count
}

// action
const actions = {
  actionIncrease ({ commit }, num) {
    console.log('actionIncrease')
    commit(types.INCREASE, num)
  },
  actionDecrease ({ commit }, num) {
    console.log('actionDecrease')
    commit(types.DECREASE, num)
  },
  actionCountReset ({ commit }) {
    console.log('actionCountReset')
    commit(types.COUNT_RESET)
  }
}

// mutation
const mutations = {
  [types.INCREASE] (state, num) {
    state.count += parseInt(num)
    console.log('INCREASE', num, 'state?', state.count)
  },
  [types.DECREASE] (state, num) {
    state.count -= parseInt(num)
    console.log('DECREASE', num, 'state?', state.count)
  },
  [types.COUNT_RESET] (state) {
    state.count = 0
    console.log('COUNT_RESET - state?', state.count)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
