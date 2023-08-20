import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Festival from '@/views/Festival.vue';

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
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
