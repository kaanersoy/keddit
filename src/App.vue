<template>
  <div id="main">
    <nav>
      <div class="container">
        <div class="nav-wrapper">
          <router-link to="/" class="brand-logo">reddit</router-link>
          <div class="searchbar">
            <input id="search" type="search" required />
            <label class="label-icon" for="search">Search something</label>
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
      input {
        height: 50px;
        font-size: 18px;
        font-weight: bold;
        border-bottom: 2px solid #fff !important;
      }
    }
  }
}
</style>

<script>
import 'normalize.css';
export default {
  name: 'App',
};
</script>
