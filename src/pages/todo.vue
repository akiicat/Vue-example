<template>
  <div class="container">
    <h2>Todo List:</h2>
    <input
      type="text"
      placeholder="add Todo.."
      v-model="newTodo"
      @keyup.enter="actionAddTodo" />
    <!-- 按鈕增加 todo -->
    <button @click="actionAddTodo">add todo</button>
    <ul>
      <li v-for="(todo, index) in todos">
        {{ todo.content }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data: function () {
    return {
      newTodo: ''
    }
  },
  computed: mapGetters({
    todos: 'getTodos'
  }),
  methods: {
    ...mapActions([
      'addTodo'
    ]),
    actionAddTodo () {
      this.$store.dispatch('addTodo', this.newTodo)
      this.newTodo = ''
    }
  }
}
</script>
