import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import wilderManagementRoutes from '@/features/wilder_management/routes'
import compendiumRoutes from './features/compendium/routes'

const routes: RouteRecordRaw[] = [

 {
    path: '/',
    name: 'main-menu',
    component: () => import('@/features/main_menu/index.vue'),
  },
  ...wilderManagementRoutes,
  ...compendiumRoutes
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: (_to, _from, savedPosition) => {
    return savedPosition || { left: 0, top: 0 }
  },
  routes
})

export default router
