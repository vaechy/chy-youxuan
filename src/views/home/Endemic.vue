<template>
  <GridContainer
   title="人气推荐"
   more='#11'
  >
  <ul class="endemic-container">
    <li v-if="endemiFore">
      <div class="big_pic">
        <img v-lazy="endemiFore.picUrl">
      </div>
      <div class="big_info">
        <p class="title">{{endemiFore.title}}</p>
        <p class="sub_title">{{endemiFore.sub_title}}</p>
        <p class="price">{{endemiFore.price}}</p>
      </div>

    </li>
    <li class="yx-card" v-for="(item,key) in endemiList" :key="key">
      <div class="pic">
        <img v-lazy="item.picUrl" >
      </div>
      <div>{{item.price}}</div>
      <div v-if="item.tag">{{item.tag}}</div>
    </li>
  </ul>
  </GridContainer>
</template>

<script>
import GridContainer from '@/components/common/GridContainer'
import { mapGetters } from 'vuex'
export default {
  components: {
    GridContainer
  },
  computed: {
    ...mapGetters(['endemiFore', 'endemiList'])
  },
  created() {
    this.$store.dispatch('getEndemic')
  },
  mounted() {
    console.log(this.$store.getters)
    console.log(this.$store.getters['endemic'])
  }
}
</script>

<style lang="scss" scoped>
ul{
    &.endemic-container{
      // display: flex;
      li{
        // width: 100px;
        // flex: 3;
        float: left;
        // height: 100px;
        // background-color: blue;
        &:nth-child(1){
          display: flex;
          align-items: center;
          background-color: #FEF0DF;
          margin-bottom: 5px;
          width: 100%;
          height: 140px;
          .big_info{
            width: 100%;
            // margin: 0 auto;
            text-align: center;
            div{
              // margin: 0 auto;
            }
            p{
              &.title{
                font-size: 14px;
              }
              &.sub_title{
                font-size: 12px;
                color: #7F7F7F;
              }
              &.price{
                font-size: 14px;
                color: #b4282d;
                span{
                  color: #b4282d;
                }
              }
            }
          }
          .big_pic{
            margin-right: 5px;
            img{
              height: 100%;
              width: 140px;
            }
          }
        }
        &.yx-card{
          margin-right: 5px;
          .pic{
            background-color: #f5f5f5;
            img{
            width: 108px;
            height: 100px;
            }
          }
        }
    }
  }
}
</style>
