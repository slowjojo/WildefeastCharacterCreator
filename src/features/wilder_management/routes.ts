export default [
  {
    path: '/wilder-management',
    component: () => import('./index.vue'),
    children: [
      {
        path: '',
        name: 'Roster',
        component: () => import('./roster/index.vue')
      },
      {
        path: 'new',
        component: () => import('./new/index.vue')
      }
    ]
  }
]