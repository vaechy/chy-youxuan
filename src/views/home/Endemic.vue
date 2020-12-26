<template>
  <GridContainer
   title="人气推荐"
   more='#11'
  >
  <ul class="endemic-container">
    <!-- <li>{{endemic}}</li> -->
    <li v-if="endemic.main_d">
      <img v-lazy="endemic.main_d.picUrl">{{endemic.main_d.title}}
    </li>
    <li class="yx-card" v-for="(item,key) in endemic.sub_d" :key="key">
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
    ...mapGetters(['endemic'])
  },
  created() {
    this.$store.dispatch('getEndemic')
  },
  mounted() {
    console.dir(this.$store.getters)
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
          background-color: #FEF0DF;
          margin-bottom: 5px;
          width: 100%;
          height: 140px;
          img{
            height: 100%;
            width: 140px;
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
