<template>
<GridContainer
  title="品牌销售直供"
>
    <ul class="barnd-list">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
</GridContainer>
</template>

<script>
import GridContainer from '@/components/common/GridContainer'
export default {
  name: 'BrandSales',
  components: {
    GridContainer
  }
}
</script>

<style lang="scss" scoped>
ul.barnd-list{
  overflow: hidden;
li{
  float: left;
  width: 171px;
  height: 128px;
  background-color: olive;
  // background: url('../../assets/img/brand/brand_3.png') 100% 100%;
    @for $i from 1 through 4 {
    &:nth-child(#{$i}){
      background-size: 100%;
        background-image: url('../../assets/img/brand/brand_#{$i}.png');
      }
    }
  }
}
</style>
