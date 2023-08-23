import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Festival from '@/views/Festival.vue';
import MovieDetails from '@/views/MovieDetails.vue';
import Submissions from '@/views/Submissions.vue';
import SpecialEvent from '@/views/SpecialEvent.vue';
import JoinUs from '@/views/JoinUs.vue';

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
      path: '/movie/:id',
      name: 'movieDetails',
      component: MovieDetails,
      props: true
    },
    {
      path: '/submissions',
      name: 'submissions',
      component: Submissions
    },
    {
      path: '/special-event',
      name: 'special-event',
      component: SpecialEvent
    },
    {
      path: '/join-us',
      name: 'join-us',
      component: JoinUs
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
