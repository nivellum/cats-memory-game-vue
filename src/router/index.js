import { createRouter, createWebHistory } from 'vue-router'
import StartGameView from '@/views/StartGameView.vue'
import PlayView from '@/views/PlayView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: StartGameView
    },
    {
      path: '/play',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: PlayView
    }
  ]
})

export default router
