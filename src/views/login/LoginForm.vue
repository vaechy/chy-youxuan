<template>
  <section class="phoneLogin">
        <van-form  @submit="onSubmit">
    <van-field
      v-model="account"
      name="account"
      label="账号"
      placeholder="手机号或者用户名"
    />
    <van-field
      v-model="password"
      type="password"
      name="password"
      label="密码"
      placeholder="密码"
    />
    <div style="margin: 16px;">
      <van-button color="#DD1A21" round block type="info" native-type="submit">登陆</van-button>
    </div>
    </van-form>
    <div class="btn-1" @click="register">返回注册</div>
    <div class="btn-1" >忘记密码</div>
  </section>

</template>

<script>
import { login } from '@/api/user'
import { Toast } from 'vant'
export default {
  name: 'LoginForm',
  data() {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    onSubmit(values) {
      console.log(values)
      login(values).then(res => {
        console.log(res)
        if (res.code === 0) {
          Toast.success(res.msg)
          localStorage.setItem('token', '123456')
          this.$router.push('/user')
        } else {
          Toast.fail(res.msg)
        }
      })
    },
    isLogin() {
      this.$emit('isLogin')
    },
    register() {
      this.$router.push('/register')
    }
  }
}
</script>

<style lang="scss" scoped>
.phoneLogin {
  background-color: $white;
  width: 100%;
  height: 471px;
  background-color: $white;
  padding-top: 152px;
}
.btn-1{
 width: 50%;
 margin: 5px auto;
 text-align: center
}
</style>
