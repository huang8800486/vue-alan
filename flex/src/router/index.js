import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/Home.vue'

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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../components/pages/About.vue')
    }, {
      path: '/webSocket',
      name: 'webSocket',
      // route level code-splitting
      // this generates a separate chunk (webSocket.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import( /* webpackChunkName: "webSocket" */ '../components/pages/webSocket.vue')
    }
  ]
})
