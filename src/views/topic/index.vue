<template>
  <section>
    <div>
      <div>{{nodeEvn}}</div>
      <div>{{vueEvn}}</div>
  </div>
  <TabBerDate/>
  </section>

</template>

<script>
import TabBerDate from '@/components/layouts/TabBerDate'
export default {
  components: {
    TabBerDate
  },
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
