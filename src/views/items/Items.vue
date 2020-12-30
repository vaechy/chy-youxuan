<template>
  <section class="items">
    <Header/>
      <div class="item-banner">
        <img v-lazy="itemData.banner_img" alt="">
      </div>
    <ItemGoodsBlock
      v-for="(item, index) in itemData.list"
      :key="index"
      :listData="item"
    />
  </section>
</template>

<script>
import Header from '@/components/common/Header'
import ItemGoodsBlock from '@/components/common/ItemGoodsBlock'
import { mapGetters } from 'vuex'
export default {
  name: 'Items',
  components: {
    Header,
    ItemGoodsBlock
  },
  data() {
    return {
      listIndex: ''
    }
  },
  computed: {
    ...mapGetters(['itemData'])
  },
  watch: {
    '$route'(to, from) {
      this.getDates(to.params.index)
    }
  },
  created() {
    this.getDates(this.$route.params.index)
  },
  beforeUpdate() {
    this.id = 300
  },
  methods: {
    toggle() {
      console.log(this.isType)
      this.isType = !this.isType
      if (this.isType) {
        this.type = 'password'
      } else {
        this.type = 'text'
      }
    },
    getDates(index) {
      this.$store.dispatch('getItem', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.items{
  width: 100%;
  background-color: $white;
  img{
    width: 100%;
  }
}
</style>
