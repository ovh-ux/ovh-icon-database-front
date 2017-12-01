import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/container/Home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
