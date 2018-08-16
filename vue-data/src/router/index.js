import Vue from 'vue'
import Router from 'vue-router'
import Post from '@/components/Post'
import After from '@/components/After'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Post',
      component: Post
    },
    {
      path: '/After',
      name: 'After',
      component: After
    }
  ]
})
