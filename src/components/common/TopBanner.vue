<template>
  <section class="top-nav">
    <div class="top-nav-list">
      <swiper :options="swiperOption">
        <swiper-slide
          v-for="(item, index) in topNavOptions"
          :key="index"
          :class="{'top-nav-item': true, active: navSelected == index}"
        >
          <router-link :to="index == 0 ? '/' : `/item/${index}`">{{item.name}}</router-link>
        </swiper-slide>
      </swiper>
    </div>
    <div :class="{dropNavWrap: true, showCateDropdown}">
      <!-- <div class="shadowMask"></div> -->
      <div class="dropIcon" @click="handleToggleNav">
        <van-icon name="arrow-down" />
      </div>
    </div>
    <div v-show="showCateDropdown" class="cates">
      <p class="cateDropTil">全部频道</p>
      <span
        v-for="(item, index) in topNavOptions"
        :key="index"
        :class="{'cateTag': true, active: navSelected == index}"
        @click="handleSkipTag(index)"
      >{{item.name}}</span>
    </div>
    <div v-show="showCateDropdown" class="cateMask" @click="handleToggleNav"></div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'
// If you use Swiper 6.0.0 or higher
import 'swiper/swiper-bundle.css'

export default {
  name: 'TopBanner',
  components: {
    Swiper,
    SwiperSlide
  },
  computed: {
    ...mapState({
      topNavOptions: state => state.home.topNavOptions
    })
  },
  data() {
    const navSelected = this.$route.params.index ? this.$route.params.index : 0
    return {
      swiperOption: {
        slidesPerView: 'auto',
        freeMode: true,
        initialSlide: navSelected
      },
      showCateDropdown: false,
      navSelected
    }
  },
  directives: {
    swiper: directive
  },
  created() {
    console.log(this.$route.params)
  },
  updated() {
    console.log(this.$route.params.index)
  },
  watch: {
    $route(to, from) {
      this.navSelected = to.params.index ? to.params.index : 0
    }
  },
  methods: {
    handleSkipTag(index) {
      const path = index === 0 ? '/' : `/item/${index}`
      this.showCateDropdown = false
      this.$router.push({ path })
    },
    handleToggleNav() {
      this.showCateDropdown = !this.showCateDropdown
    }
  }
}
</script>
<style lang="scss" scoped>
.top-nav {
  // opacity: 0;
  background: white;

  position: relative;
  .top-nav-list {
    height: 30px;
    line-height: 30px;
    padding-right: 60px;
    padding-left: 15px;
    border-bottom: 0.1px solid gray;
    .top-nav-item.swiper-slide {
      display: inline-block;
      font-size: 14px;
      padding: 0 8px;
      color: black;
      width: auto;
      a {
        text-decoration: none;
        color: #333;
      }
      &.active {
        position: relative;
        a {
          color: #dd1a21;
        }
        &::after {
          content: ' ';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background-color: #dd1a21;
        }
      }
      &:not(:first-child) {
        margin-left: 10px;
      }
    }
  }
  .dropNavWrap {
    display: block;
    width: 80px;
    height: 30px;
    // @include block(80px, 30px);
    position: absolute;
    top: 0;
    right: 0;
    z-index: 12;
    .shadowMask {
      // @include block(30px, 30px);
      display: block;
      width: 30px;
      height: 30px;
      background: linear-gradient(to right, rgba(255, 255, 255, 0) 0, pink 100%);
      // vertical-align: bottom;
    }
    .dropIcon {
      margin: 0 auto;
      // @include block(50px, 30px);
      display: block;
      width: 50px;
      height: 30px;
      text-align: center;
      line-height: 30px;
    }
    i {
      display: inline-block;
      transition: 0.3s;
    }
    &.showCateDropdown {
      margin-top: 7px;
      i {
        transform: rotate(180deg);
      }
    }
  }
  .cates {
    // padding-left: 30px;
    width: 100%;
    height: 198px;
    background-color: #ffffff;
    position: absolute;
    top: 0;
    z-index: 2;
    display: flex;
    flex-flow: row wrap;
    span {
      text-align: center;
      line-height: 26px;
      margin-left: 15px;
      // flex-grow: 1;
      width: 73px;
      height: 26px;
      border: 1px solid #ccc;
      background-color: #fafafa;
      &.active {
        color: #b4282d;
        border-color: #b4282d;
      }
    }
    p {
      align-self: center;
      height: 30px;
      line-height: 30px;
      margin: 0;
      font-size: 14px;
      padding-left: 15px;
      width: 100%;
      // background-color: orangered;
    }
  }
}
</style>
