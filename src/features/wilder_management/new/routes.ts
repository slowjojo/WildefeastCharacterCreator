
import ToolPage from './pages/ToolPage.vue'
import SpecialtyPage from './pages/SpecialtyPage.vue'
import ThreeCoursePage from './pages/ThreeCoursePage.vue'
import NameAndPronounsPage from './pages/NameAndPronounsPage.vue'

export default [
  {
    path: '',
    redirect: '/create/tool'
  },
  {
    path: 'tool',
    component: ToolPage
  },
  {
    path: 'specialty',
    component: SpecialtyPage
  },
  {
    path: 'background',
    component: ThreeCoursePage
  },
  {
    path: 'name',
    component: NameAndPronounsPage
  }
]
