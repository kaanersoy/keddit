<template>
  <div class="container">
    <section class="subreddit">
      <div class="page-title">
        <h2>{{ `r/` + subredditName }}</h2>
      </div>
      <posts v-if="subredditName" :reddit="subredditName"></posts>
    </section>
  </div>
</template>

<script>
import Posts from '../components/Posts';
export default {
  name: 'Subreddit',
  data: () => ({
    subredditName: null,
  }),
  components: {
    Posts,
  },
  mounted() {
    this.subredditName = this.$route.params.subreddit;
  },
  watch: {
    '$route.params.subreddit': function() {
      console.log('changed!');
      this.subredditName = this.$route.params.subreddit;
    },
  },
};
</script>

<style lang="scss">
section.subreddit {
  width: 100%;
}
</style>
