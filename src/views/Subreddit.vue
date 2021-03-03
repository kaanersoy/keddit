<template>
  <div class="container">
    <section class="subreddit">
      <h1>{{ `r/` + subredditName }}</h1>
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
};
</script>

<style lang="scss">
section.subreddit {
  width: 100%;
}
</style>
