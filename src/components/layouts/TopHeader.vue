<template>
  <div>
    <header>
      <router-link to="/" class="logo"></router-link>
      <router-link to="/search" class="headSearch">
        <van-icon class="icon-search" name="search" size="0.5rem" />
        <span class="placeholder">搜索商品共有20000好物</span>
      </router-link>
      <router-link class="login" to="/login">登陆</router-link>
    </header>
  </div>
</template>

<script>
export default {
  name: 'TopHeader'
}
</script>

<style lang="scss" scoped>
header {
  background-color: $white;
  padding: 7px 14px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  // text-align: left;
  .logo {
    // vertical-align: middle;
    width: 65px;
    height: 20px;
    margin-right: 9px;
    display: inline-block;
    background: url('../../assets/img/logo.png') no-repeat;
    background-size: 100% 100%;
  }
  .headSearch {
    flex-grow: 1;
    padding: 0;
    // vertical-align: middle;
    line-height: 26px;
    width: 228px;
    height: 26px;
    background-color: #ededed;
    .icon-search {
      margin-left: 5px;
      margin-right: 5px;
      top: 5px;
    }
    .placeholder {
      color: #666;
      font-size: 15px;
    }
  }
  .login {
    // vertical-align: middle;
    // display: inline-block;
    width: 31px;
    height: 17px;
    margin-left: 7px;
    text-align: center;
    color: #dd1a21;
    border: 1px solid #dd1a21;
    border-radius: 0.10667rem;
    font-size: 0.32rem;
  }
}
</style>
