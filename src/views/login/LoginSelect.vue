<template>
  <div class="loginTypesWrap">
    <!-- <van-button >大号按钮</van-button> -->
    <div class="loginPhone loginButton">
      <van-button color="#DD1A21" type="primary" size="large"  @click="login">登陆</van-button>
    </div>
    <div class="loginButton">
      <van-button size="large" color="#DD1A21" plain type="primary"  @click="register">注册</van-button>
      <!-- <van-button color="grey" type="primary"   @click="emailLogin">邮箱登陆</van-button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginSelect',
  methods: {
    login() {
      this.$emit('isLogin')
    },
    register() {
      this.$router.push('/register')
    }
  }
}
</script>

<style lang="scss" scoped>
.loginTypesWrap {
  padding: 221px 16% 0;
  width: 100%;
  background-color: $grey ;
}
.loginButton{
  width: 70%;
}
.loginPhone {
  margin: auto 0;
  margin-bottom: 10px;
}
</style>
