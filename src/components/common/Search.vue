<template>
  <section class="search">
    <div class="search-input">
      <van-icon name="search" />
      <input type="text">
    </div>
    <div class="search-button">
      <router-link to="/"><span>取消</span></router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  flex-flow: row nowrap;
  padding: 10px 15px;
  width: 100%;
  // height: 200px;
  background-color: $white;
  .search-input{
    padding: 7px 12px;
    width: 260px;
    background-color: #f4f4f4;
    input{
     margin-left: 5px;
     background-color:  #F5F5F5;
     border: none;
    }
  }
  .search-button{
    text-align: center;
    line-height: 27px;
    padding-left: 20px;
  }
}
</style>
