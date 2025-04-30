import WilderManagementWrapper from './index.vue'
import CharacterCreationWrapper from './new/index.vue'
import Roster from './roster/index.vue'

export default [
  {
    path: '/wilder-management',
    component: WilderManagementWrapper,
    children: [
      {
        path: '',
        name: 'Roster',
        component: Roster
      },
      {
        path: 'new',
        component: CharacterCreationWrapper
      }
    ]
  }
]
