/*
  展示多商品类目款框
*/
<template>
  <section class="yx-category">
        <div class="test">
      {{categoryData._id}}
      <img v-lazy="categoryData.main.picUrl" alt="">
    </div>
    <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide>
        <img class="banner-img" src="https://p22.zzzyk.com/2017/11/201712022115211535.jpg" />
     </swiper-slide>
    <swiper-slide>
        <img class="banner-img" src="https://p22.zzzyk.com/2017/10/201710211505150545.jpg"/>
    </swiper-slide>

    <!-- 指示点 -->
    <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>

  </section>
</template>

<script>
export default {
  name: 'CategoryGoodsBlock',
  created() {
    // this.$store.dispatch('getGoods')
  },
  props: {
    categoryData: {
      type: Object,
      default() {
        return {
          main: [],
          goods: []
        }
      }
    }
  },
  data() {
    return {
      swiperOption: {
        autoplay: true, // 自动切换
        loop: true, // 循环
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets' // 默认圆点指示点
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .test{
    width: 100px;
    height: 200px;
    // background-color: black;
  }
  img{
    width: 100%;
  }
  .recommendPage .swiper-container{
  position: relative;
  width: 100%;
  height: 200px;
  background: pink;
}
.recommendPage .swiper-container .swiper-slide{
  width: 100%;
  line-height: 200px;
  background: yellowgreen;
  color: #000;
  font-size: 16px;
  text-align: center;
}
</style>
