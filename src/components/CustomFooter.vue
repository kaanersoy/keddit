<template>
  <footer>
    <div class="wrapper">
      <p>
        keddit | reddit clone |
        <a href="https://github.com/kaanersoy/keddit" target="_blank"
          >github.com/kaanersoy/keddit</a
        >
      </p>
      <p>Author: <a href="https://kaanersoy.site" target="_blank">Kaan Ersoy</a></p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'CustomFooter',
};
</script>

<style lang="scss">
$maincolor: #fff;
$bgcolor: #009688;
footer {
  margin: 0;
  padding: 0;
  background-color: $bgcolor;
  padding: 30px;
  text-align: center;
  .wrapper {
    p {
      font-weight: 900;
      margin: 0;
      color: $maincolor;
      & + p {
        margin-top: 20px;
      }
      a {
        transition: 200ms;
        color: inherit;
        text-decoration: none;
        color: rgba($color: #76deec, $alpha: 1);
        font-weight: inherit;
        display: inline-block;
        margin: 0;
        padding: 0;
      }
    }
  }
}
</style>
