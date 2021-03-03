<template>
  <div id="main">
    <nav class="teal">
      <div class="nav-wrapper">
        <router-link to="/" class="brand-logo center">reddit</router-link>
        <router-link to="yey" data-target="mobile-demo" class="sidenav-trigger"
          ><i class="material-icons">menu</i></router-link
        >
        <ul class="right hide-on-med-and-down">
          <!-- <li><router-link to="sass.html">Sass</router-link></li>
          <li><router-link to="badges.html">Components</router-link></li>
          <li><router-link to="collapsible.html">Javascript</router-link></li>
          <li><router-link to="mobile.html">Mobile</router-link></li> -->
        </ul>
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

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $bgcolor;
}
nav {
  padding: 0 30px;
}
</style>

<script>
import 'normalize.css';
export default {
  name: 'App',
};
</script>
