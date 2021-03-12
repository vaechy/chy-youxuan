<template>
  <section>
    <div class="cart-top">
      <div>
        购物车
      </div>
      <button class="admin">管理</button>
    </div>
    <TabBerDate/>
  </section>
</template>

<script>
import TabBerDate from '@/components/layouts/TabBerDate'
export default {
  name: 'Cart',
  components: {
    TabBerDate
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

</style>
