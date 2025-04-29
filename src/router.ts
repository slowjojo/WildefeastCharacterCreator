import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import MainMenu from '@/features/main_menu/desktop.vue'
import wilderManagementRoutes from '@/features/wilder_management/routes'
import compendiumRoutes from './features/compendium/routes'
import CharacterCreationWrapper from '@/features/wilder_management/new/index.vue'
import NewRoutes from '@/features/wilder_management/new/routes'

const routes: RouteRecordRaw[] = [
  {
    path: '/create',
    component: CharacterCreationWrapper,
    children: NewRoutes
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
