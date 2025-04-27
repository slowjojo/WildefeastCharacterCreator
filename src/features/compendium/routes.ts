
import type { RouteRecordRaw } from 'vue-router'
import Compendium from './index.vue'

const compendiumRoutes: RouteRecordRaw[] = [
  {
    path: '/compendium',
    name: 'Compendium',
    component: Compendium,
  },
]

export default compendiumRoutes
