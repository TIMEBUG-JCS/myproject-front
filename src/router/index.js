import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
//import container from '@/components/container'
//import tabs from '@/components/tabs'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: ()=> Index
    },
    {
      path: '/RealVisit',
        name: 'realvisit',
      component: () => import('@/views/visit/RealVisit')
    },
    {
      path: '/PersonLib',
        name: 'personlib',
      component: () => import('@/views/personlibman/Personlib')
    },
    {
      path: '/PersonStat',
        name: 'personstat',
      component: () => import('@/views/statistic/PersonStat')
    },
    {
      path: '/executecontrol',
      name: 'executecontrol',
      component: () => import('@/views/personlibman/executecontrol')
    },
    {
      path: '/tableshow',
      name: 'tableshow',
      component: () => import('@/views/personlibman/tableshow')
    }
  ]
})
