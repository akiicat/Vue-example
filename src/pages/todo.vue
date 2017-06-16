<template>
  <div class="container">
    <h1>vue & vuex Todo List example</h1>
    <hr>
    <div class="row">
      <div class="input-group col-md-4">
        <input
          type="text"
          class="form-control"
          placeholder="add Todo.."
          v-model="newTodo"
          @keyup.enter="actionAddTodo" />
        <span class="input-group-btn">
          <button class="btn btn-success" type="button" @click="actionAddTodo">+</button>
        </span>
      </div>
    </div>
    <!-- 左右兩個欄位分別存放 todo / done -->
    <div class="row">
      <div class="col-md-6">
        <h2>Todo List:</h2>
        <ul>
          <todo-item v-for="(item, index) in todoList" :item="item"/>
        </ul>
      </div>
      <div class="col-md-6">
        <h2>Done List:</h2>
        <ul >
          <li v-for="(item, index) in doneList">
            <label>
              <input
                type="checkbox"
                :checked="item.done"
                @change="toggleTodo( item.key )">
              {{ item.content }}
            </label>
          </li>
        </ul>
      </div>
    </div><!-- end row -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import todoItem from '../components/todo-item.vue'

export default {
  data: function () {
    return {
      newTodo: ''
    }
  },
  computed: mapGetters({
    todoList: 'getTodos',
    doneList: 'getDones'
  }),
  methods: {
    ...mapActions([
      'addTodo',
      'toggleTodo'
    ]),
    actionAddTodo () {
      debugger
      this.$store.dispatch('addTodo', this.newTodo)
      this.newTodo = ''
    }
  },
  components: {
    todoItem
  }
}
</script>
