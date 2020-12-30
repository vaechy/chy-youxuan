<template>
  <section class="goodybag">
    <div class="new-title" ><span> 新人专享礼包 </span></div>
    <div class="content">
      <div class="pic-new"><p class="">新人专享礼包</p><img v-lazy="new_bag" alt=""></div>
      <div class="pic-new">
        <ul class="top-title">
            <li>福利社</li>
            <li>今日特价</li>
        </ul>
        <ul class="top-price sticker">
            <li>$524</li>
            <li>$699</li>
        </ul>
        <img v-lazy="well" alt="">
        </div>
      <div class="pic-new">
        <ul class="bot-title">
          <li>新人拼</li>
          <li>2远侯</li>
        </ul>
        <ul class="bot-price sticker">
          <li>112</li>
          <li>2</li>
        </ul>
        <img v-lazy="group" alt="">
        </div>
    </div>
    <!-- <img src="@/assets/img/new_bag.png" alt=""> -->
    <!-- <img v-lazy="`${new_bag}`" alt=""> -->
    <!-- <div class="pic_bag"><img v-for="(img,i) in imageList" v-lazy="new_bag" alt="" :key='i'></div>
    <div class="pic_well"><img v-for="(img,i) in imageList" v-lazy="well" alt="" :key='i'></div>
    <div class="pic_group"><img img v-for="(img,i) in imageList" v-lazy="group" alt="" :key='i' ></div> -->
    <!-- <img src="@/../static/img/new_bag.png" alt=""> -->
    <!-- <img src="@/../static/img/new_bag.png" alt=""> -->
    <!-- <div class="pic-new" v-for="(img,i) in imageList" :key='i'><img  v-lazy="`${img}`"/></div> -->
  </section>
</template>

<script>
import new_bag from '@/assets/img/new_bag.png'
import well from '@/assets/img/well.png'
import group from '@/assets/img/group.png'
export default {
  name: 'Newcomer',
  data() {
    return {
      new_bag,
      well,
      group
    }
  }
}
</script>

<style lang="scss" scoped>
.goodybag{
// width: 100%;
height: 277px;
margin-top: 5px;
background-color: $white;
padding: 0px 15px 15px;
.new-title{
  text-align: center;
  width: 345px;
  // height: 45px;
  height: 18%;
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 58px;
  span{
    position: relative;
    &::before{
    content: '';
    width: 10px;
    height: 2px;
    position: absolute;
    background-color: black;
    top: 50%;
    left: -17px;
    }
     &::after{
     content: '';
    width: 10px;
    height: 2px;
    position: absolute;
    background-color: black;
    top: 50%;
    right: -17px;
    }
  }
}
.content{
  // width: 375px;
  width: 100%;
  height: 82%;
  overflow: hidden;
  .pic-new{
    float: left;
  // width: 171px;
  height:50%;
  img{
  height: 100px;
  margin: 5px 5px;
  }
  ul{
     position: absolute;
  }
  .sticker{
      &:nth-child(2){
      width: 40px;
      height: 40px;
      text-align: center;
      vertical-align: middle;
      border-radius: 50%;
      background-color: #f59524;
      top: 0px;
      right: 0px;
            li{
        &:nth-child(1){
          margin-top: 5px;
        }
      }
      }

  }
  &:nth-child(1){
    background-color: #F9E9CF;
        // padding: 1px 1px;
    height: 227px;
    img{
      width: 129px;
      height: 128px;
      margin: 20px 22px;
    }
  }
  &:nth-child(2){
    position: relative;
    background-color: #FBE2D3;
    border-left: 2px solid #ffffff;
    border-bottom: 2px solid #ffffff;
    width: 170px;
    img{
      margin-left: 67px;
    }

    .top-title{
      top: 5px;
      left: 5px;
    }
  }
  &:nth-child(3){
    position: relative;
    width: 170px;
    border-left: 2px solid #ffffff;
    background-color: #FFECC2;
    img{
      margin-left: 67px;
    }
    ul{
      position: absolute;
    }
    .bot-title{
      top: 5px;
      left: 5px;
    }
  }
  }
}
}
</style>
