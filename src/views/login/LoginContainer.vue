<template>
  <section class="user-container">
    <router-view />
  </section>
</template>

<script>
export default {
  name: 'LoginContainer'
}
</script>

<style lang="scss" scoped>
.user-container {
  height: 100%;
  background-color: #f2f5f4;
}
</style>
