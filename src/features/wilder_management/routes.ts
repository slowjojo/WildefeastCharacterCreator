import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '',
    component: require('./index.vue').default, // <- loads the layout above
    children: [
      {
        path: '',
        name: 'wilder-roster',
        component: require('./roster/index.vue').default,
      },
      // You can add more routes later:
      // {
      //   path: 'new',
      //   name: 'create-wilder',
      //   component: require('./new/CharacterBuilder.vue').default,
      // }
    ],
  },
]

export default routes
