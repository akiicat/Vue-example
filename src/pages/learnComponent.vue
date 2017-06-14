<template>
  <div>
    <navbar>
      <div slot="right">
        <input type="text" placeholder="Email" class="form-control mr-sm-2">
        <input type="password" placeholder="Password" class="form-control mr-sm-2">
        <button type="submit" class="btn btn-outline-success my-2 my-sm-0">Sign in</button>
      </div>
    </navbar>
    <jumbotron></jumbotron>
    <container :list="list"></container>
  </div>
</template>

<script>
import Navbar from '../components/navbar.vue'
import Jumbotron from '../components/jumbotron.vue'
import Container from '../components/container.vue'

export default {
  data () {
    return {
      list: [
        {
          title: 'Heading',
          info: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
          btntext: 'View details »'
        },
        {
          title: 'Heading',
          info: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
          btntext: 'View details »'
        },
        {
          title: 'Heading',
          info: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
          btntext: 'View details »'
        }
      ]
    }
  },
  components: {
    Navbar,
    Jumbotron,
    Container
  }
}
</script>
