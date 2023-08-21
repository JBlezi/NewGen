import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Festival from '@/views/Festival.vue';
import LoveisLove from '@/views/LoveisLove.vue';

const routes = [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/festival',
      name: 'festival',
      component: Festival
    },
    {
      path: '/love-is-love',
      name: 'love-is-love',
      component: LoveisLove
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
