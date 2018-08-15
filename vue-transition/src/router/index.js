import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Trade from '@/components/trade/trade'
import Qd from '@/components/trade/qd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      directives: '/index',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    }, 
    {
      path: '/trade/trade',
      name: 'trade',
      component: Trade
    }, {
      path: '/trade/qd',
      name: 'qd',
      component: Qd
    }
  ]
})
