import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import MainMenu from '@/features/main_menu/index.vue'
import wilderManagementRoutes from '@/features/wilder_management/routes'
import compendiumRoutes from './features/compendium/routes'
import CharacterCreationWrapper from '@/features/wilder_management/new/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/create',
    component: CharacterCreationWrapper,
  },
  {
    path: '/',
    name: 'main-menu',
    component: MainMenu
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
