import { createRouter, createWebHistory } from 'vue-router'
import PostsViews from './views/PostsView.vue'
import PostView from './views/PostView.vue'
import AuthorsView from './views/AuthorsView.vue'
import AuthorView from './views/AuthorView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'posts',
      component: PostsViews
    },
    {
      path: '/post/:id',
      name: 'post',
      component: PostView
    },
    {
      path: '/authors',
      name: 'authors',
      component: AuthorsView
    },
    {
      path: '/author/:username',
      name: 'author',
      component: AuthorView
    },
  ]
})

export default router