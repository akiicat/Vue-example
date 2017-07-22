// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'

Vue.use(Vuex)
Vue.config.productionTip = false

// 頁面轉跳驗證
router.beforeEach((to, from, next) => {
  // 如果 router 轉跳的頁面需要驗證 requiresAuth: true
  console.log('to=', to.fullPath, '| from=', from.fullPath)
  if (to.matched.some(record => {
    console.log(record.name, record.meta.requiresAuth)
    return record.meta.requiresAuth
  })) {
    // 如果沒有 token
    console.log('token?', store.state.token)
    if (store.state.token === '') {
      // 轉跳到 login page
      next({ path: '/login' })
    } else {
      next() // 往下繼續執行
    }
  } else {
    next() // 往下繼續執行
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
