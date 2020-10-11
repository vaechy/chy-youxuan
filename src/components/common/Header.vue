<template>
  <section class="header">
    <van-sticky z-index="1">
      <TopHeader />
      <TopBanner />
    </van-sticky>
  </section>
</template>

<script>
import TopHeader from '../layouts/TopHeader'
import TopBanner from './TopBanner'
export default {
  name: 'Header',
  components: {
    TopHeader,
    TopBanner
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  z-index: 2;
}
</style>
