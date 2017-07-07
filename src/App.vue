<template>
  <div>
    <navbar>
      <div slot="right">
        <input type="text" placeholder="Email" class="form-control mr-sm-2">
        <input type="password" placeholder="Password" class="form-control mr-sm-2">
        <button type="submit" class="btn btn-outline-success my-2 my-sm-0">Sign in</button>
      </div>
    </navbar>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav {
  position: fixed;
  top: 0px;
  padding: 0 10px;
}
.view {
  position: relative;
}
.container {
  display: block;
  margin-bottom: 10px;
}
</style>
