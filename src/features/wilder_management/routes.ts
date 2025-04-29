import WilderManagementWrapper from './index.vue'
import CharacterCreationWrapper from './new/index.vue'
import NewRoutes from './new/routes'

const RosterPlaceholder = { template: '<div>Wilder Roster will go here</div>' }

export default [
  {
    path: '/wilder-management',
    component: WilderManagementWrapper,
    children: [
      {
        path: '',
        component: RosterPlaceholder
      },
      {
        path: 'new',
        component: CharacterCreationWrapper,
        children: NewRoutes
      }
    ]
  }
]
