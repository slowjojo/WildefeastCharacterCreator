import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import MainMenu from '@/features/main_menu/desktop.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'main-menu',
    component: MainMenu,
  }
]

  const router = createRouter({
    history: createWebHistory(),
    scrollBehavior: (_to, _from, savedPosition) => {
      return savedPosition || { left: 0, top: 0 };
    },
    routes,
  });
  

export default router;
