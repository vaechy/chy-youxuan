/*
商品展示
*/

<template>
  <section class="yx-card-list">
      <header>
        <p>{{listData.title}}</p>
        <p>{{listData.sub_title}}</p>
      </header>
      <div class="yx-card-container">
        <ItemCard
          v-for="(item, index) in listData.list"
          :key="index"
          :cardData = item
        />
      </div>
  </section>
</template>

<script>
import ItemCard from './ItemCard'
export default {
  name: 'ItemGoodsBlock',
  components: {
    ItemCard
  },
  props: {
    listData: {
      type: Object,
      default() {
        return {
          list: '',
          sub_title: '',
          title: ''
        }
      }
    }
  },
  created() {
    console.log(this)
  }
}
</script>

<style lang="scss" scoped>
.yx-card-list{
  .yx-card-container{
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    padding: 0 10px;
  }
  header {
    margin: 12px 0;
    p{
      text-align: center;
      &:nth-child(1){
        // background-color: aqua;
        font-size: 16px;
      }
       &:nth-child(2){
         color: #999;
        font-size: 12px;
      }
    }
  }
}
</style>
