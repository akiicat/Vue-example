<template>
  <nav class="navbar navbar-toggleable-md navbar-light bg-inverse">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon">Toggle navigation</span>
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand text-white" href="#">Project name</a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active" v-for="list in lists">
          <router-link :to="{name: list.name}" class="nav-link text-white">{{ list.name }}</router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <slot name='right'>
          <!-- 包裹在 slot 裡面的這段 code 是預設 -->
        </slot>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  data: function () {
    return {
      lists: this.$router.options.routes
    }
  }
}
</script>

<style>
</style>
