import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/wilder-management',
    component: () => import('./index.vue'),
    children: [
      {
        path: '',
        name: 'WilderManagement',
        component: () => import('./roster/index.vue')
      },
      {
        path: 'new',
        name: 'CreateWilder',
        component: () => import('./new/CharacterBuilder.vue')
      }
    ]
  }
]

export default routes
