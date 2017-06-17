// types
const types = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  DELETE_TODO: 'DELETE_TODO',
  UPDATE_TODO: 'UPDATE_TODO'
}

// state
const state = {
  todos: [
    { key: 0, content: 'vue.js 2.0', done: true },
    { key: 1, content: 'vuex 2.0', done: false },
    { key: 2, content: 'vue-router 2.0', done: false },
    { key: 3, content: 'vue-resource 2.0', done: false },
    { key: 4, content: 'webpack', done: false }
  ]
}

// getters
const getters = {
  getTodos: state => state.todos.filter(item => !item.done),
  getDones: state => state.todos.filter(item => item.done)
}

// actions
const actions = {
  addTodo ({ commit }, newTodo) {
    console.log('add new todo', newTodo)
    commit(types.ADD_TODO, newTodo)
  },
  toggleTodo ({ commit }, obj) {
    console.log('toggle todo', obj)
    commit(types.TOGGLE_TODO, obj)
  },
  deleteTodo ({ commit }, key) {
    console.log('delete todo', key)
    commit(types.DELETE_TODO, key)
  },
  updateTodo ({ commit }, obj) {
    console.log('updateTodo', obj)
    commit(types.UPDATE_TODO, obj)
  }
}

// mutations
let todoKey = state.todos.length

// mutations
const mutations = {
  [types.ADD_TODO] (state, newTodo) {
    state.todos.push({
      key: todoKey,
      content: newTodo,
      done: false
    })
    todoKey++
  },
  [types.TOGGLE_TODO] (state, obj) {
    state.todos.forEach(item => {
      if (item.key === obj.key) {
        item.done = obj.checked
      }
    })
  },
  [types.UPDATE_TODO] (state, obj) {
    state.todos.forEach((item, index) => {
      if (item.key === obj.key) {
        console.log('UPDATE_TODO:', item.content, ' to →', obj.change)
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

export default {
  state,
  getters,
  actions,
  mutations
}
