import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    }
  ]
})

const testRouter: RouteRecordRaw[] = [
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/HomeView.vue')
  }
]

export default router
