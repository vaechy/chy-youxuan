<template>
  <span class="product-tag">
    {{tag}}
  </span>
</template>

<script>
export default {
  name: 'ProductTag',
  props: {
    tag: {
      type: String
    }
  }
}
</script>

<style>
  .product-tag {
    display: inline-block;
    border: 1px solid #b4282d;
    padding:0 4px;
    font-size: 12px;
  }
</style>
