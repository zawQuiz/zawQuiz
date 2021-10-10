import {
  createRouter as createClientRouter,
  createWebHistory,
} from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/pages/index.vue'),
  },
  {
    path: '/zaloguj',
    name: 'auth-login',
    component: () => import('@/pages/login.vue'),
  },
  {
    component: () => import('/src/pages/error.vue'),
    name: 'error-404',
    path: '/error-404',
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/error-404',
  },
]

export function createRouter() {
  const router = createClientRouter({
    history: createWebHistory(),
    routes,
  })

  return router
}
