import * as types from './mutations_type.js'

// state
export const state = {
  count: 0,
  todos: [
    { key: 0, content: 'vue.js 2.0', done: true },
    { key: 1, content: 'vuex 2.0', done: false },
    { key: 2, content: 'vue-router 2.0', done: false },
    { key: 3, content: 'vue-resource 2.0', done: false },
    { key: 4, content: 'webpack', done: false }
  ]
}

let todoKey = state.todos.length

// mutations
export const mutations = {
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
  },
  [types.ADD_TODO] (state, newTodo) {
    state.todos.push({
      key: todoKey,
      content: newTodo,
      done: false
    })
    todoKey++
  },
  [types.TOGGLE_TODO] (state, key) {
    state.todos.forEach(item => {
      if (item.key === key) {
        item.done = !item.done
      }
    })
  },
  [types.UPDATE_TODO] (state, obj) {
    state.todos.forEach((item, index) => {
      if (item.key === obj.key) {
        console.log('UPDATE_TODO:', item.content, ' to →', obj.change)
        // 找到 todo 更新 content
        state.todos[index].content = obj.change
      }
    })
  },
  [types.DELETE_TODO] (state, key) {
    state.todos.forEach((item, index) => {
      if (item.key === key) {
        state.todos.splice(index, 1)
      }
    })
  }
}
