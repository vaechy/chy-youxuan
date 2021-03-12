<template>
    <van-form  @submit="onSubmit">
    <van-field
      v-model="username"
      name="邮箱号"
      label="邮箱号"
      placeholder="邮箱号"
      :rules="[{ required: true, message: '请输入邮箱号' }]"
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
    <div @click="emailLogin">使用其他方式登陆</div>
    </van-form>
</template>

<script>
export default {
  name: 'EmailLogin',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit(values) {
      localStorage.setItem('token', '123456')
      this.$router.push('/user')
    },
    emailLogin() {
      this.$emit('emailLogin')
    }
  }
}
</script>

<style>

</style>
