<template>
  <div>
    <router-link >跳转</router-link>
    <div>{{nodeEvn}}</div>
    <div>{{vueEvn}}</div>
  </div>
</template>

<script>
export default {
  computed: {
    nodeEvn() {
      return process.env.NODE_ENV
    },
    vueEvn() {
      return process.env.VUE_APP_ENV
    }
  }
}
</script>

<style>

</style>
