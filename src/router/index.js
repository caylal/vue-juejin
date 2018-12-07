import Vue from 'vue'
import Router from 'vue-router'


import home from '../views/HomeView'
import synthesize from '../views/SynthesizeView'
import search from '../views/SearchView'
import xiaoce from '../views/XiaoceView'
import me from '../views/MeView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/welcome'
     
    },
    {
      path: '/welcome',
      component: resolve => require(['../views/WelcomeView'], resolve),
    },   
    {
      path: '/index',
      component: resolve => require(['../views/IndexView'], resolve),
      children: [
        {
          path: '',
          redirect: 'home'
        },
        {
          path: 'home',
          component: resolve => require(['../views/HomeView'], resolve),
        },
        {
          path: 'synthesize',
          component: resolve => require(['../views/SynthesizeView'], resolve),
        },
        {
          path: 'search',
          component: resolve => require(['../views/SearchView'], resolve),
        },
        {
          path: 'xiaoce',
          component: resolve => require(['../views/XiaoceView'], resolve),
        },
        {
          path: 'me',
          component: resolve => require(['../views/MeView'], resolve),
        }
      ]
    },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: home
    // },
    // {
    //   path: '/synthesize',
    //   name: 'synthesize',
    //   component: synthesize
    // },
    // {
    //   path: '/search',
    //   name: search,
    //   component: search
    // },
    // {
    //   path: '/xiaoce',
    //   name: xiaoce,
    //   component: xiaoce
    // },
    // {
    //   path: '/me',
    //   name: me,
    //   component: me
    // }
  ]
})
