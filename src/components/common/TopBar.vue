<template>
  <div class="m-topBar">
    <div class="icon">
      <router-link to="/"><van-icon name="wap-home-o"  size="30px"/></router-link>
    </div>
    <div class="icon-logo">
    </div>
    <div class="icon icon-searcn" >
      <router-link to="/search"><van-icon name="search"  size="30px"/></router-link>
    </div>
    <div class="icon">
      <router-link to="/search">
        <van-icon name="cart-o"  size="30px"/></router-link>
    </div>
  </div>
</template>

<script>

</script>
<style lang="scss" scoped>
.m-topBar{
  position: relative;
  padding: 0 10px;
  align-items: center;
  justify-content:space-between;
  display: flex;
  flex-flow: row nowrap;
  height: 44px;
  background-color: $white;
  $testpx : 86px;
  .icon-logo{
    width: $testpx;
    height: 27px;
    background: url('../../assets/img/logo.png') no-repeat;
    background-size: 100% 100%;
    @include transformcenter
  }
  .icon-searcn{
    margin-left: 245px;
  }
  .icon{
    flex-basis: 32px;
  }
}
</style>
