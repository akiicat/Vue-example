import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/pages/Hello'
import CtoF from '@/pages/C2F'
import learnComponent from '@/pages/learnComponent'
import Count from '@/pages/count'
import Todo from '@/pages/todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/c2f',
      name: 'c2f',
      component: CtoF
    },
    {
      path: '/learnComponent',
      name: 'learnComponent',
      component: learnComponent
    },
    {
      path: '/count',
      name: 'count',
      component: Count
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    },
    {
      path: '/*',
      redirect_to: '/hello'
    }
  ]
})
