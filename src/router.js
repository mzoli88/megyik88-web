import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Age from './views/Age.vue'
import math_2 from './math/math_2.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/age',
      name: 'age',
      component: Age
    },
    {
      path: '/math_2',
      name: 'math_2',
      component: math_2
    }
  ]
})
