<template>
  <div>
    <div class="boc">
      <img v-for="( item,index ) in BannerData.data" :key="index" :src="item.src" alt />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SwiperBanner',
  computed: {
    ...mapGetters(['BannerData'])
  },
  created() {
    console.log(this.$store)
    this.$store.dispatch('getBannerData')
  }
}
</script>

<style scoped>
.boc {
  width: 100%;
  height: 80px;
}
</style>
