/*
*  展示多商品类目款框
*/
<template>
  <section class="yx-category">
    <div class="category-head" v-if="categoryData.main">
      <img v-lazy="categoryData.main.picUrl" alt="">
    </div>
    <div class="category-list">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide
          v-for="(item,index) in categoryData.goods"
          :key="index"
        >
          <CategoryCard
            :GoodsData = "item"
          />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import CategoryCard from './CategoryCard'
export default {
  name: 'CategoryGoodsBlock',
  components: {
    CategoryCard
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto'
      }
    }
  },
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
  mounted() {
  }
}
</script>

<style lang="scss">
.yx-category{
  background-color: $white;
  height: 390px;
  margin-bottom: 10px;
  img{
    width: 100%
  }
  .category-list{
    .swiper-slide{
      width: 100px;
    }
  };
}
</style>
