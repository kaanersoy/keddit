<template>
  <div id="main">
    <nav>
      <div class="container">
        <div class="nav-wrapper">
          <router-link to="/" class="brand-logo">reddit</router-link>
          <div class="searchbar">
            <input id="search" type="search" v-model="searchKeyword" required />
            <label class="label-icon" for="search">Search something</label>
            <span v-if="searchKeyword" class="close"
              ><svg
                height="20"
                viewBox="0 0 48 48"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#fff"
                  d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"
                /></svg
            ></span>
          </div>
          <!-- //SEARCH https://www.reddit.com/subreddits/search.json?q= -->
        </div>
      </div>
    </nav>
    <!-- mobile -->
    <!-- <ul class="sidenav" id="mobile-demo">
      <li><a to="sass.html">Sass</a></li>
      <li><a to="badges.html">Components</a></li>
      <li><a to="collapsible.html">Javascript</a></li>
      <li><a to="mobile.html">Mobile</a></li>
    </ul> -->

    <router-view />
  </div>
</template>

<style lang="scss">
$bgcolor: #dae0e6;
$maincolor: #009688;

.container {
  max-width: 70%;
  margin: 0 auto;
}
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $bgcolor;
}
nav {
  background-color: $maincolor;
  line-height: inherit;
  height: unset;
  .brand-logo {
    font-size: 30px;
    color: #fff;
    font-weight: bold;
    text-decoration: none;
  }
  .nav-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    .searchbar {
      position: relative;
      label {
        position: absolute;
        left: 0;
        top: 12px;
        color: rgba($color: #fff, $alpha: 0.8);
        transition: 200ms ease-out;
      }
      span {
        display: inline-block;
        line-height: 1;
        position: absolute;
        right: -20px;
        bottom: 8px;
        cursor: pointer;
      }
      input {
        height: 40px;
        font-size: 18px;
        font-weight: bold;
        background-color: rgba($color: #fff, $alpha: 0);
        box-shadow: none;
        border: none;
        outline: none;
        border-bottom: 2px solid rgba($color: #fff, $alpha: 0.3);
        color: #fff;
        transition: 300ms ease-out;
        &:focus,
        &:valid {
          & ~ label {
            color: rgba($color: #fff, $alpha: 0.5);
            transform: translate(-10px, -30px) scale(0.8);
          }
        }
      }
    }
  }
}
</style>

<script>
import 'normalize.css';
export default {
  name: 'App',
  data: () => ({
    isSearching: false,
    searchKeyword: null,
  }),
  methods: {
    makeSearch: function() {
      console.log();
    },
  },
};
</script>
