import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/pages/Hello'
import CtoF from '@/pages/C2F'
import learnComponent from '@/pages/learnComponent'
import Count from '@/pages/count'
import Todo from '@/pages/todo'
import Shop from '@/pages/shop'
import Cart from '@/pages/cart'
import Open1999 from '@/pages/open1999'
import Login from '@/pages/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: Hello,
      meta: { requiresAuth: true }
    },
    {
      path: '/c2f',
      name: 'c2f',
      component: CtoF,
      meta: { requiresAuth: true }
    },
    {
      path: '/learnComponent',
      name: 'learnComponent',
      component: learnComponent,
      meta: { requiresAuth: true }
    },
    {
      path: '/count',
      name: 'count',
      component: Count,
      meta: { requiresAuth: true }
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo,
      meta: { requiresAuth: true }
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop,
      meta: { requiresAuth: true }
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
      meta: { requiresAuth: true }
    },
    {
      path: '/open1999',
      name: 'open1999',
      component: Open1999,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/*',
      redirect_to: '/hello'
    }
  ]
})
