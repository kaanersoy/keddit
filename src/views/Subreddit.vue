<template>
  <section class="subreddit">
    <h1>{{ subredditName }}</h1>
  </section>
</template>

<script>
export default {
  name: 'Subreddit',
  data: () => ({
    subredditName: null,
  }),
  mounted() {
    this.subredditName = this.$route.params.subreddit;
  },
};
</script>

<style></style>
