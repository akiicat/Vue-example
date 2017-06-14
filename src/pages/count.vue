<template>
  <div class="container">
    <h2>count:<span class="count"> {{ count }}</span></h2>

    <input type='number' v-model='num' style="width: 50px;"><br/>

    <button @click="actionIncrease(num)"> + {{ num }}</button>
    <button @click="actionDecrease(num)"> - {{ num }}</button>

    <button @click="actionCountReset">歸零</button>
  </div>
</template>

<script>
// 引用 vuex
// mapActions 在 computed 中使用，提取 action 函式的方法，使用函式名稱
// mapGetters 在 methods 中使用，提取 getter 函式的方法，可以利用物件 key: value 方式取別名
import { mapGetters, mapActions } from 'vuex'

export default {
  data: function () {
    return {
      num: 1
    }
  },
  computed: mapGetters({
    count: 'getCount'
  }),
  methods: {
    ...mapActions([
      'actionIncrease',
      'actionDecrease',
      'actionCountReset'
    ])
  }
}
</script>
