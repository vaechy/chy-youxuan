<template>
  <div class="layout-footer">
      <TabBar :data="tabbars" @change="handleChange" />
  </div>
</template>

<script>
import TabBar from './TabBar'
export default {
  name: 'AppLayout',
  data() {
    return {
      tabbars: [
        {
          title: '首页',
          to: {
            name: 'Home'
          },
          icon: 'wap-home-o'
        },
        {
          title: '分类',
          to: {
            name: 'Sort'
          },
          icon: 'bars'
        },
        {
          title: '识物',
          to: {
            name: 'Topic'
          },
          icon: 'photo'
        },
        {
          title: '购物车',
          to: {
            name: 'Cart'
          },
          icon: 'cart-o'
        },
        {
          title: '个人',
          to: {
            name: 'User'
          },
          icon: 'user-o'
        }
      ]
    }
  },
  components: {
    TabBar
  },
  methods: {
    handleChange(v) {
      console.log('tab value:', v)
    }
  }
}
</script>
<style lang="scss" scoped>
.layout-content {
  height: 100%;
}
.layout-footer {
  overflow: hidden;
}
</style>
