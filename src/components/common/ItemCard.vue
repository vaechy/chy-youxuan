<template>
  <div class="yx-card-box">
      <div class="card-pic">
        <img v-lazy="cardData.picUrl" alt="">
      </div>
      <div class="card-desc">{{cardData.desc}}</div>
      <div>{{cardData.discount}}</div>
      <div>{{cardData.price}}</div>
      <div>{{cardData.sub_title}}</div>
      <div>{{cardData.tag}}</div>
      <div>{{cardData.title}}</div>
  </div>
</template>

<script>
export default {
  name: 'ItemCard',
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
          tag: '',
          title: ''
        }
      }

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
      img{
        width: 172px;
      }
      &:nth-child(2n){
        margin-left:10px ;
      }
  }

</style>
