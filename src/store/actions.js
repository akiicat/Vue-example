// 引入 mutations_type （引用同一個 key）
import * as types from './mutations_type.js'

export const actionIncrease = ({ commit }, num) => {
  console.log('actionIncrease')
  commit(types.INCREASE, num)
}

export const actionDecrease = ({ commit }, num) => {
  console.log('actionDecrease')
  commit(types.DECREASE, num)
}

export const actionCountReset = ({ commit }) => {
  console.log('actionCountReset')
  commit(types.COUNT_RESET)
}

export const addTodo = ({ commit }, newTodo) => {
  console.log('add new todo', newTodo)
  commit(types.ADD_TODO, newTodo)
}

export const toggleTodo = ({ commit }, obj) => {
  console.log('toggle todo', obj)
  commit(types.TOGGLE_TODO, obj)
}

export const deleteTodo = ({ commit }, key) => {
  console.log('delete todo', key)
  commit(types.DELETE_TODO, key)
}

export const updateTodo = ({ commit }, obj) => {
  console.log('updateTodo', obj)
  commit(types.UPDATE_TODO, obj)
}
