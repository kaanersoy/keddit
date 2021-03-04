import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Subreddit from '@/views/Subreddit.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'keddit - back face of internet',
    },
  },
  {
    path: '/r/:subreddit',
    name: 'subreddit',
    component: Subreddit,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.params.subreddit) {
    document.title = `${to.params.subreddit} | keddit`;
    next();
  } else {
    document.title = `${to.meta.title}`;
    next();
  }
});

export default router;
