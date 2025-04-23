// src/features/compendium/routes.ts
import type { RouteRecordRaw } from 'vue-router'
import Compendium from './views/Compendium.vue'

const compendiumRoutes: RouteRecordRaw[] = [
  {
    path: '/compendium',
    name: 'compendium',
    component: Compendium,
  },
]

export default compendiumRoutes
