import Vue from 'vue'
import Router from 'vue-router'

import accorList from '@/components/accorList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: accorList
    },
    {
      path: '/*',
      redirect: {
        name: 'home'
      }
    }
  ]
})
