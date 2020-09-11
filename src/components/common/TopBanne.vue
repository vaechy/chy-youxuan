<template>
  <van-tabs v-model="active" swipeable>
    <van-tab v-for="index in 5" :title="'选项 ' + index" :key="index">{{ index }}</van-tab>
  </van-tabs>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  name: 'TopBanner',
  computed: {
    list: {
      a: 1,
      b: 2,
      c: 3
    }
  },
  data() {
    return {
      a: 1,
      b: 2,
      c: 3
    }
  }
}
</script>

<style lang="scss" scoped>
.top-nav {
  background: $white;
  position: relative;
  .top-nav-list {
    height: 30px;
    line-height: 30px;
    padding-right: 60px;
    padding-left: 15px;
    border-bottom: 1px solid $gray;
    .top-nav-item.swiper-slide {
      display: inline-block;
      font-size: 14px;
      padding: 0 8px;
      color: $black;
      width: auto;
      &.active {
        position: relative;
        a {
          color: $yx_theme;
        }
        &::after {
          content: ' ';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background-color: $yx_theme;
        }
      }
      &:not(:first-child) {
        margin-left: 10px;
      }
    }
  }
  .dropNavWrap {
    @include block(80px, 30px);
    position: absolute;
    top: 0;
    right: 0;
    z-index: 12;
    .shadowMask {
      @include block(30px, 30px);
      background: linear-gradient(to right, rgba(255, 255, 255, 0) 0, $white 100%);
      vertical-align: bottom;
    }
    .dropIcon {
      @include block(50px, 30px);
      text-align: center;
      line-height: 30px;
    }
    i {
      display: inline-block;
      transition: 0.3s;
    }
    &.showCateDropdown {
      i {
        transform: rotate(180deg);
      }
    }
  }
  .cates {
    position: absolute;
    top: -0px;
    left: 0;
    z-index: 2;
    background: $white;
    .cateDropTil {
      font-size: 14px;
      height: 30px;
      line-height: 30px;
      padding-left: 15px;
      margin-bottom: 12px;
    }
    .cateTag {
      @include block(73px, 26px);
      text-align: center;
      line-height: 26px;
      margin: 0 0 20px 15px;
      border: 1px solid #ccc;
      background: #fafafa;
      &.active {
        color: $yx_theme;
        border-color: $yx_theme;
      }
    }
  }
  .cateMask {
    @include posFixed(-1);
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
}
</style>
