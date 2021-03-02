<template>
  <div class="home">
    <div class="container">
      <div class="card-container">
        <div class="post-card">
          <div class="post-card__head">
            <h4>About Post</h4>
          </div>
          <div class="post-card__body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, hic. Tempore
              ea officiis, quam est accusantium omnis nam consequatur temporibus
              reprehenderit illum tempora eum praesentium! Sunt eos possimus aliquid!
              Perferendis?
            </p>
          </div>
        </div>
      </div>
      <div v-if="!loaded" class="preloader">
        <div class="preloader-wrapper big active">
          <div class="spinner-layer spinner-blue-only">
            <div class="circle-clipper left">
              <div class="circle"></div>
            </div>
            <div class="gap-patch">
              <div class="circle"></div>
            </div>
            <div class="circle-clipper right">
              <div class="circle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data: () => ({
    posts: false,
    loaded: false,
  }),
  mounted: function() {
    this.getPosts('all');
  },
  methods: {
    getPosts: async function(name) {
      this.loaded = false;
      fetch(`https://www.reddit.com/r/${name}.json`)
        .then(res => res.json())
        .then(res => console.log(res))
        .then(() => (this.loaded = true));
    },
  },
};
</script>

<style lang="scss">
.home {
  .preloader {
    display: flex;
    justify-content: center;
  }
}
</style>
