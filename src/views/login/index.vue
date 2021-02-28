<template>
  <div class="m-login">
    <ToBar/>
    <LoginPanel/>
  </div>
</template>

<script>
import ToBar from '@/components/common/TopBar'
import LoginPanel from '@/components/user/LoginPanel'
export default {
  name: 'TopBar',
  components: {
    ToBar,
    LoginPanel
  }
}
</script>

<style lang="scss" scoped>
.m-login{
  height: 100%;
}
</style>
