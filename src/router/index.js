import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Subreddit from '@/views/Subreddit.vue';

Vue.use(VueRouter);

// function guard(to, from, next) {
//   if (to.fullPath.startsWith('/r/r')) {
//     if (to.params.subreddit) {
//       const subreddit = to.params.subreddit;
//       next(`/${subreddit}`);
//     } else {
//       next();
//     }
//     next();
//   } else {
//     next();
//   }
// }

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/r/:subreddit',
    name: 'subreddit',
    component: Subreddit,
  },
];
// router.beforeEach((to,from,next) => {
//   to.
// })

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
