import Vue from 'vue'
import Router from 'vue-router'

import welcome from '../views/WelcomeView'
import home from '../views/HomeView'
import synthesize from '../views/SynthesizeView'
import search from '../views/SearchView'
import xiaoce from '../views/XiaoceView'
import me from '../views/MeView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: welcome,
      component: welcome,
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/synthesize',
      name: 'synthesize',
      component: synthesize
    },
    {
      path: '/search',
      name: search,
      component: search
    },
    {
      path: '/xiaoce',
      name: xiaoce,
      component: xiaoce
    },
    {
      path: '/me',
      name: me,
      component: me
    }
  ]
})
