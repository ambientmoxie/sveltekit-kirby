<script>
  import "$lib/scss/main.scss";
</script>

<a href="/">Go back home</a>

<slot />

<style lang="scss">
  a {
    padding: 10px;
    position: absolute;
    bottom: 0;
    left: 0;
    &::before {
      content: "↵ ";
    }
  }
</style>
