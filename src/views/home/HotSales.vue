<template>
<GridContainer
  title="类目热销版"
  more='#11'
>
      <ul class="hot-list">
        <!-- <li class="top" v-for="(item,key) in hotProduct.hot" :key="key">
          <div class="name"><span>{{item.name}}</span></div>
          <div class="picWrap">
            <img v-lazy="item.picUrl">
          </div>
        </li> -->
        <li class="item" v-for="(item,key) in hotProduct" :key="'ranks'+key">
          <div class="name">{{item.name}}</div>
          <div class="picWrap">
            <img v-lazy="item.picUrl">
          </div>
        </li>
      </ul>
</GridContainer>
</template>

<script>
import GridContainer from '@/components/common/GridContainer'
import { mapGetters } from 'vuex'
export default {
  name: 'HotSales',
  components: {
    GridContainer
  },
  computed: {
    ...mapGetters(['hotProduct'])
  },
  created() {
    this.$store.dispatch('getHotProduct')
  }
}
</script>

<style lang="scss" scoped>
.hot-list{
  li{
    height: 100px;
    background-color: #F9F3E4;
    float: left;
     &.item:nth-child(n+3){
      background-color: #f5f5f5;
      width: 25%;
      height: 90px;
      .name{
        margin-top: 12px;;
        text-align: center;
      }
      .picWrap{
        position: relative;
        text-align: center;
        img{
          width: 60px;
          height: 60px;
          margin: 0 auto;
        }
      }
    }
    &:nth-child(-n+2){
      background-color: #EBEFF6;
      width: 50%;
      position: relative;
      .name{
        span{
        position: absolute;
        top: 50%;
        left: 10%;
          &::after{
            display: block;
            width: 30px;
            height: 2px;
            content: '';
            background-color: black;
        }
        }
      }
      img{
        position: absolute;
        width: 100px;
        height: 100px;
        top: 0;
        right: 0;
      }
    }
  }
}
</style>

