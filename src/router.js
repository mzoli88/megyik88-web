import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Age from './views/Age.vue'
import math_2 from './math/math_2.vue'
import math_3 from './math/math_3.vue'
import math_3_2 from './math/math_3_2.vue'
import math_4 from './math/math_4.vue'
import math_5 from './math/math_5.vue'
import Jly from './math/Jly.vue'

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
    },
    {
      path: '/math_3',
      name: 'math_3',
      component: math_3
    },
    {
      path: '/math_3_2',
      name: 'math_3_2',
      component: math_3_2
    },
    {
      path: '/math_4',
      name: 'math_4',
      component: math_4
    },
    {
      path: '/math_5',
      name: 'math_5',
      component: math_5
    },
    {
      path: '/jly',
      name: 'jly',
      component: Jly
    }
  ]
})
