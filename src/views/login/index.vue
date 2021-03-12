<template>
  <div class="m-login">
    <ToBar/>
    <!-- <LoginPanel/> -->
    <LoginForm v-show="login"  @isLogin="isLogin"/>
    <LoginSelect v-show="select" @isLogin="isLogin"  />
  </div>
</template>

<script>
import ToBar from '@/components/common/TopBar'
import LoginForm from './LoginForm'
import LoginSelect from './LoginSelect'
export default {
  name: 'TopBar',
  components: {
    ToBar,
    // LoginPanel,
    LoginForm,
    LoginSelect
  },
  data() {
    return {
      login: false,
      select: true
    }
  },
  methods: {
    isLogin() {
      console.log('test')
      this.login = !this.login
      this.select = !this.select
    }
  },
  beforeRouteEnter(to, from, next) {
    if (!localStorage.getItem('token')) {
      next()
    } else {
      next('user')
    }
  }
}
</script>

<style lang="scss" scoped>
.m-login{
  height: 100%;
  box-sizing: border-box;
}
</style>
