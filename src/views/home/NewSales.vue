<template>
  <GridContainer
  title="新品首发"
  >
  <div class="new-container">
    <div v-for="(item,index) in arrival" :key="index" class="yx-item">
      <a href=""><img v-lazy="item.picUrl" alt=""></a>
      <div class="yx-title">{{item.title}}</div>
    </div>
  </div>
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
    ...mapGetters(['arrival'])
  },
  created() {
    this.$store.dispatch('getArrival')
  }
}
</script>
<style lang="scss" scoped>
.new-container{
  width: 100%;
  overflow: hidden;
  div{
    &.yx-item{
      width: 33%;
      float: left;

    }
    // background-color: brown;
    &.yx-title{
      width: 100%;
      // height: 50px;
    }
  }
  a{
    display: block;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  }
  img{
    width: 100%;
    height: 100%;
  }
}
</style>
