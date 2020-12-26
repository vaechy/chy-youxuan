<template>
  <section class="show-container">
    <div class="container-title">{{title}}
      <div class="more" v-if="more">更多</div>
    </div>
    <slot></slot>
    </section>
</template>

<script>
export default {
  name: 'GridContainer',
  props: {
    title: {
      type: String,
      default: ''
    },
    more: String
  }
}
</script>

<style lang="scss" scoped>
.show-container{
  padding:0 14px;
  margin: 10px 0 50px 0;
  overflow: hidden;
  background-color: $white;
  .container-title{
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    position: relative;
  }
  .more{
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
