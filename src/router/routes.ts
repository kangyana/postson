import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home/index.vue'),
  },
  { 
    path: '/mine',
    name: 'mine',
    component: () => import('@/views/Mine/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/home'
  },
];
export default routes;
