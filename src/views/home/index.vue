<!-- home -->
<template>
  <section class="index-container">
    <div class="warpper">
      <Header />
      <SwiperBanner />
      <!-- 频道直达 -->
      <ShoppingChannle />
      <!-- 新人活动 -->
      <Newcomer />
      <!-- 品牌 -->
      <BrandSales />
      <!-- 热销 -->
      <HotSales />
      <!-- 人气 -->
      <Endemic/>
      <!-- 新品 -->
      <NewSales/>
      <!-- 多商品展示 -->
      <Goods
        v-for="(item,index) in goods"
        :key="index"
        :categoryData="item"
      >
      </Goods>
    </div>
    <TabBerDate/>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '@/components/common/Header'
import SwiperBanner from '@/components/common/SwiperBanner'
import ShoppingChannle from './ShoppingChannle'
import Newcomer from './Newcomer'
import BrandSales from './BrandSales'
import HotSales from './HotSales'
import Endemic from './Endemic'
import NewSales from './NewSales'
import Goods from '@/components/common/CategoryGoodsBlock'
import TabBerDate from '@/components/layouts/TabBerDate'
export default {
  data() {
    return {
      list: [
        'Vue-cli4',
        '配置多环境变量',
        'VantUI 组件按需加载',
        'Sass 全局样式',
        'Webpack 4',
        'Vuex 状态管理',
        'Axios 封装及接口管理',
        'Vue-router',
        'Webpack 4 vue.config.js 基础配置',
        '配置 proxy 跨域',
        '配置 alias 别名',
        '配置 打包分析',
        '配置 externals 引入 cdn 资源',
        '去掉 console.log',
        'splitChunks 单独打包第三方模块',
        '添加 IE 兼容',
        'Eslint+Pettier 统一开发规范'
      ]
    }
  },
  components: {
    Header,
    SwiperBanner,
    ShoppingChannle,
    Newcomer,
    BrandSales,
    HotSales,
    Endemic,
    NewSales,
    Goods,
    TabBerDate
  },
  computed: {
    ...mapGetters(['goods'])
  },

  mounted() {},

  methods: {},

  created() {
    this.$store.dispatch('getGoods')
  }
}
</script>
<style lang="scss" scoped>
.index-container {
  background-color:$grey;
  height: 1500px;
  margin-bottom:45px;
  .warpper {
    // padding: 12px;
    .demo-home__title {
      margin: 0 0 6px;
      font-size: 32px;
      .demo-home__title img,
      .demo-home__title span {
        display: inline-block;
        vertical-align: middle;
      }
      img {
        width: 32px;
      }
      span {
        margin-left: 16px;
        font-weight: 500;
      }
    }
    .demo-home__desc {
      margin: 0 0 20px;
      color: rgba(69, 90, 100, 0.6);
      font-size: 14px;
    }
  }
}
</style>
