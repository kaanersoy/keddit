<template>
  <div v-if="!loaded" class="preloader">
    <img src="../assets/loading-icon.svg" alt="loading icon" />
  </div>
</template>

<script>
export default {
  name: 'Preloader',
  props: ['loaded'],
};
</script>

<style lang="scss">
.preloader {
  display: flex;
  justify-content: center;
  img {
    width: 60px;
    height: 60px;
  }
}
</style>
