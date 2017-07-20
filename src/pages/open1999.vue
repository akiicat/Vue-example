<template>
  <div class="container">
    <!--
  		card
  		layout 的部分是參考囉.. 可以自己調整。
  	-->
    <div class="row">
      <div class="col-md-4 col-sm-6" v-for="item in opendate">
        <div class="thumbnail">
          <span class="label label-warning">{{ item.ZipName_ }}</span>
          <span class="label label-ligth-pink">{{ item.InformDesc_ }}</span>
          <span class="label label-info">{{ item.UnitName_ }}</span>
          <div class="caption">
            <h3>
              <a :href="getGoogleMap( item.address_ )" target="_blank">{{ item.address_ }}</a>
            </h3>
            <p>{{ item.BeforeDesc_ }}</p>
            <small class="text-muted">反應日期：{{ item.Cre_Date_ }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  created () {
    // created Hook 發出 action call API
    this.$store.dispatch('open1999')
  },
  computed: mapGetters({
    opendate: 'getOpen1999'
  }),
  methods: {
    ...mapActions([
    ]),
    getGoogleMap (address) {
      return `https://www.google.com/maps/place/${address}`
    }
  }
}
</script>
