<template>
  <div class="yx-cate-card">
    <a href="http://www.baidu.com">
      <img v-lazy="GoodsData.picUrl" alt="">
      <div>{{GoodsData.title}}</div>
      <div>{{GoodsData.price}}</div>
      <div>{{GoodsData.tag}}</div>
    </a>

  </div>
</template>

<script>
export default {
  name: 'CategoryCard',
  props: {
    GoodsData: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.yx-cate-card{
  // width: 100px;
  img{
    width: 100px;
    height: 100px;
  }
}
</style>
