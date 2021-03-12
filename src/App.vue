<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  created() {
    console.log(this.$route)
  }
}
</script>
<style lang="scss">
#app {
  height: 667px;
  background-color: $white;
}
</style>
