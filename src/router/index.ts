import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/tanstack-query',
      name: 'tanstack-query',
      component: () => import('../views/TanstackQueryView.vue')
    }
  ]
})

export default router
