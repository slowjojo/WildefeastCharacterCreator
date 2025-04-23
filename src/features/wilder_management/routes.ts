// src/pages/wilder-management/routes.ts

import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/wilder-management', // Give this route a full path!
    component: () => import('./index.vue'), // The layout page
    children: [
      {
        path: '', // default sub-route for /wilder-management
        name: 'wilder-management',
        component: () => import('./roster/index.vue'), // The main roster
      },
      
    ],
  },
]

export default routes
