import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ModuleB from '@/components/moduleB'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
        path: '/moduleB',
        name: 'ModuleB',
        component: ModuleB
      }
  ]
})
