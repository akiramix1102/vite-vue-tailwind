import type { RouteRecordRaw } from 'vue-router'

const testRouter: RouteRecordRaw[] = [
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/TestView.vue')
  }
]

export default testRouter
