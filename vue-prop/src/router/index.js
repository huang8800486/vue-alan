import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/index',
      component: Index,
      children: [
        {
          // 首页
          path: '/index',
          name: 'index',
          component: () =>
            import ('@/components/page/home/main.vue')
        },
        {
          path: '/home',
          name: 'home',
          component: () =>
            import ('@/components/page/Home.vue')
        },
        {
          path: '/bout',
          name: 'bout',
          component: () =>
            import ('@/components/page/bout.vue')
        }
      ]
    }
  ]
})
