<template>
  <section>
    <ServicePolicy />
      <ul class="shoppingChannle">
        <li v-for="(item,key) in ChannelsList" :key="key">
          <router-link :to="`/item/${key+1}`">
            <img  v-lazy="item.picUrl" alt=""><span>{{item.name}}</span>
          </router-link>
        </li>
      </ul>
  </section>
</template>

<script>
import ServicePolicy from '@/components/common/ServicePolicy'
import { mapGetters } from 'vuex'
export default {
  name: 'ShoppingChannle',
  components: {
    ServicePolicy
  },
  computed: {
    ...mapGetters(['ChannelsList'])
  },
  created() {
    this.$store.dispatch('getChannelsList')
  },
  mounted() {
    console.log()
  }
}

</script>

<style lang="scss" scoped>
.shoppingChannle{
  background-color: $white;
  display: flex;
  flex-flow: row wrap;
  align-content:center;

li{
  text-align: center;
  // display: block;
  padding-bottom:4px;
  flex: 0 0 75px;
}
img{
  width: 55px;
  height: 55px;
}
span{
  display: block;
  font-size: 13px;
  margin-top: 4px;
}
}

</style>
