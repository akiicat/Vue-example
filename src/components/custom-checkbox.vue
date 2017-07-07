<template>
  <span>
    <span class="squaredFour">
      <input
        type="checkbox"
        :id="getID"
        :checked="item.done"
        @change="handleChange" />
      <label :for="getID" class="checkbox-icon"></label>
    </span>
    <label :for="getID">{{ item.content }}</label>
  </span>
</template>

<script>
export default {
  props: {
    item: Object
  },
  computed: {
    getID () {
      return `custom_${Math.floor(Math.random() * 9999)}`
    }
  },
  methods: {
    handleChange ($event) {
      this.$emit('toggleTodo', {
        key: this.item.key,
        checked: $event.target.checked
      })
    }
  }
}
</script>

<style src="../../static/css/squared-button.css"></style>
