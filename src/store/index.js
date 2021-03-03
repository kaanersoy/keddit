import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    subreddits: [],
  },
  mutations: {
    addsubreddit(state, value) {
      state.subreddits.push(value.value);
    },
  },
  actions: {},
  modules: {},
});
