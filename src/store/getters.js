// get count & todo
export const getCountandTodo = state => {
  return {
    count: state.count.count,
    todo: state.todo.todos
  }
}

// just return all state
export const getAllstate = state => state
export const getLoading = state => state.loading
