<template>
  <form action="/">
    <van-search
      show-action
      placeholder="请输入搜索关键词"
      @cancel="onCancel"
    />
  </form>
</template>

<script>
export default {
  name: 'VantSearch',
  methods: {
    onCancel() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
