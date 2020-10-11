<template>
  <section class="goodybag">
    <div class="new-title" >newcomer packing list oody bag</div>
    <!-- <img src="@/assets/img/new_bag.png" alt=""> -->
    <!-- <img v-lazy="`${new_bag}`" alt="">
    <div class="pic_bag"><img :src="new_bag" alt=""></div>
    <div class="pic_well"><img v-lazy="well" alt=""></div>
    <div class="pic_group"><img v-lazy="group" alt=""></div> -->
    <!-- <img src="@/../static/img/new_bag.png" alt=""> -->
    <!-- <img src="@/../static/img/new_bag.png" alt=""> -->
    <!-- <img v-for="(img,i) in imageList" v-lazy="img" :key='i' /> -->
  </section>
</template>

<script>
// import new_bag from 'static/img/new_bag.png'
// import well from '@/assets/img/well.png'
// import group from '@/assets/img/group.png'
export default {
  name: 'Newcomer',
  data() {
    return {
      imageList: [
        // new_bag,
        // well,
        // group
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.goodybag div{
  float: left;
}
.goodybag .new-title{
width: 345px;
height: 45px;
background-color: pink;
}
// .goodybag .pic_bag img:nth-child(1){
// width: 129px;
// height: 128px;
// }
</style>
