<template>
  <div class="yx-card-box">
      <div class="card-pic">
        <img v-lazy="cardData.picUrl" alt="">
      </div>
      <div class="card-desc">{{cardData.desc}}</div>
      <span class="card-price">￥{{cardData.price}} </span>
      <span v-if="cardData.discount" class="card-discount">￥{{cardData.discount}}</span>
      <div>{{cardData.sub_title}}</div>
      <ProductTag
        v-if="cardData.tag"
        :tag="cardData.tag"
      />
      <div>{{cardData.title}}</div>
      <button @click="fn">加入购物车</button>
  </div>
</template>

<script>
import ProductTag from './ProductTag'
export default {
  name: 'ItemCard',
  components: {
    ProductTag
  },
  props: {
    cardData: {
      type: Object,
      default() {
        return {
          desc: '',
          discount: '',
          picUrl: '',
          price: '',
          spec: '',
          sub_title: '',
          tag: 'test',
          title: ''
        }
      }

    }
  },
  methods: {
    fn() {
      Toast()
    }
  }
}
</script>

<style lang="scss" scoped>
  .yx-card-box{
    height: 290px;
      // float: left;
      width: 172px;
      .card-desc{
        padding-left: 9px ;
        background: #F1ECE2;
        height: 24px;
        // text-align: center;
        line-height: 24px;
        color: #9F8A60;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .card-price{
        color: #b4282d;
      }
      .card-discount{
        color: #999;
        text-decoration: line-through;
      }
      img{
        width: 172px;
      }
      &:nth-child(2n){
        margin-left:10px ;
      }
  }

</style>
