import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import MainMenu from '@/features/main_menu/desktop.vue'
import wilderManagementRoutes from '@/features/wilder_management/routes.ts'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'main-menu',
    component: MainMenu,
  },
  ...wilderManagementRoutes // <-- use this instead of hardcoding /wilder-management
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: (_to, _from, savedPosition) => {
    return savedPosition || { left: 0, top: 0 }
  },
  routes,
})

export default router
