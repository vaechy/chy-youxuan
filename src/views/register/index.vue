<template>

<section name="" id="">
  <van-nav-bar  @click-left="onClickLeft" title="用户注册" left-text="返回" left-arrow>
  <van-icon name="search" slot="right" />
  </van-nav-bar>
  <van-form validate-first @submit="onSubmit">
  <van-field
    v-model="username"
    name="username"
    label="用户名"
    placeholder="请输入用户名"
  />
  <van-field
    v-model="phone"
    name="phone"
    label="手机号"
    placeholder="手机号"
    :rules="[{ pattern, message: '请输入正确手机号' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="password"
    label="密码"
    placeholder="请输入密码"
  />
  <div style="margin: 16px;">
    <van-button color="#DD1A21" round block type="info" native-type="submit">提交</van-button>
  </div>
</van-form>
</section>
</template>

<script>
import { Toast } from 'vant'
import { register } from '@/api/user'
export default {
  name: 'Register',
  data() {
    return {
      username: '',
      phone: '',
      password: '',
      pattern: /^[1][0-9]{10}$/
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
    },
    onSubmit(values) {
      console.log(values)
      register(values).then(res => {
        if (res.code === 0) {
          Toast.success('注册成功')
          this.$router.push('/login')
        } else {
          Toast.fail(res.msg)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

	/deep/ .van-ellipsis {
		color: #333333;
	}
	/deep/ .van-nav-bar .van-icon {
		color: #333333;
	}
	/deep/ .van-nav-bar__text {
		color: #333333;
	}

</style>
