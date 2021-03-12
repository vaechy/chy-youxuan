<template>
  <section class="wp-user">
    个人中
   <van-button @click="exitLogin" type="primary" size="large">退出登陆</van-button>
  <TabBerDate/>
  </section>
</template>

<script>
import { Dialog } from 'vant'
import TabBerDate from '@/components/layouts/TabBerDate'
export default {
  name: 'User',
  components: {
    [Dialog.Component.name]: Dialog.Component,
    TabBerDate
  },
  methods: {
    exitLogin() {
      Dialog.confirm({
        title: '标题',
        message: '弹窗内容'
      })
        .then(() => {
          localStorage.removeItem('token')
          this.$router.push('/')
        })
        .catch(() => {
        // on cancel
        })
      // console.log(this.$router)
    }
  },
  beforeRouteEnter(to, from, next) {
    if (!localStorage.getItem('token')) {
      next('/login')
    } else {
      next()
    }
  }
}
</script>

<style lang="scss" scoped>
.wp-user {
}
</style>
