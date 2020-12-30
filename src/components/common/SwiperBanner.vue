<template>
  <section class="swiper-banner">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in BannerData" :key="index">
        <img :src="item.src" alt="" />
      </van-swipe-item>
    </van-swipe>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SwiperBanner',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['BannerData'])
  },
  created() {
    this.$store.dispatch('getBannerData')
  }
}
</script>
<style lang="scss" scoped>
.swiper-banner{
  overflow: hidden;
}
.boc {
  width: 100%;
  height: 80px;
}
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  vertical-align: bottom;
}
</style>
