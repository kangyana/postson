import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/Home/index.vue'),
  },
  { 
    path: '/mine',
    name: 'mine',
    component: () => import('@/pages/Mine/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/home'
  },
];
export default routes;
