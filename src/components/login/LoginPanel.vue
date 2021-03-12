<template>
  <div class="m-login-types">
    <van-form  @submit="onSubmit">
    <van-field
      v-model="username"
      name="name"
      label="手机号"
      placeholder="手机号"
      :rules="[{ required: true, message: '请输入手机号' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">登陆</van-button>
    </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: 'LoginPanel',
  props: {
    name: {
      type: String,
      default: '手机号'
    }
  }
}
</script>

<style lang="scss" scoped>
.m-login-types{
  width: 100%;
  height: 100%;
  // background-color: rosybrown;
  margin-bottom: 150px;
}
</style>
