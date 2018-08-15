import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Alan1 from '@/components/Alan1'
import Alan2 from '@/components/Alan2'
import UserProfile from '@/components/Profile'
import Alan3 from '@/components/Alan3'
import Alan4 from '@/components/Alan4'
import User from '@/components/user'
import Login from '@/components/login'

Vue.use(Router)

let myRouter =  new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect: '/HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Alan1',
      name: 'Alan1',
      alias: '/b',
      component: Alan1
    },
    {
      path: '/Alan2',
      name: 'Alan2',
      meta: {
          needLogin: true
      },
      component: Alan2
    },
    {
      path: '/Alan3',
      name: 'Alan3',
      component: Alan3
    },
    {
      path: '/Alan4',
      name: 'Alan4',
      component: Alan4
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User,
      props: true, 
      children:[
        {
            path: 'Profile',
            component: UserProfile
        }
      ]
    }
  ]
})

// 全局守卫
myRouter.beforeEach((to, from, next) => {
    // to.path 组件路径
    let pathName = to.path.split('/')[1]
    if (to.matched.some(record => record.meta.needLogin)) {
        // 如果为true, 则跳到login登陆页面
        if (true) {
            next({
                path: "/login"
            })
        } else {
            next()
        }
    } else {
        next() // 确保一定要调用 next()
    }
})

export default myRouter
