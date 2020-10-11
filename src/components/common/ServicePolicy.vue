<template>
  <section class="g-grow">
    <span>网易自营品牌</span>
    <span>30天无忧退货</span>
    <span>48小时快速退款</span>
  </section>
</template>

<script>
export default {
  name: 'ServicePolicy'
}
</script>

<style lang="scss" scoped>
.g-grow {
  padding: 0 15px;
  display: flex;
  height: 36px;
  line-height: 36px;
  text-align: center;
}
.g-grow span {
  color: $red;
  flex-flow: row nowrap;
  flex-grow: 1;
}
</style>
