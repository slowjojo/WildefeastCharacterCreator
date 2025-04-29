import { createRouter, createWebHistory } from "vue-router";

import CharacterCreationWrapper from "index.vue";
import NameAndPronounsPage from "./pages/NameAndPronounsPage.vue";
import ToolPage from "./pages/ToolPage.vue";
import SpecialtyPage from "./pages/SpecialtyPage.vue";
import ThreeCoursePage from "./pages/ThreeCoursePage.vue";


const routes = [
    {
      path: '/create',
      component: CharacterCreationWrapper,
      children: [
        { path: '', redirect: '/create/name' },
        { path: 'name', component: NameAndPronounsPage },
        { path: 'tool', component: ToolPage },
        { path: 'specialty', component: SpecialtyPage },
        { path: 'background', component: ThreeCoursePage },
      ],
    },
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  
  export default router