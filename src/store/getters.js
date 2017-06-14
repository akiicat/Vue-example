export const getCount = state => state.count
export const getTodos = state => state.todos.filter(item => !item.done)
export const getDones = state => state.todos.filter(item => item.done)
