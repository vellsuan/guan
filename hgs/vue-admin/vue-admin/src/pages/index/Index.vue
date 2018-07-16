<template>
  <div class="layout-index">
    <div class="info"></div>
    <div class="top clearfix">
      <div class="logo">
        <img src="./img/logo.png" alt="logo">
      </div>
      <div class="top-nav fleft">
        <TopNav :list="list" @refactMenu="refactMenu" ref="topNav"></TopNav>
      </div>
    </div>
    <div class="clearfix">
        <router-view name="leftView"></router-view>
    </div>
  </div>
</template>

<script>
import TopNav from "./TopNav";
import LeftNav from "./LeftNav";
import MenuData from "./MenuData";

export default {
  name: "layout",
  components: {
    TopNav: TopNav,
    LeftNav: LeftNav
  },
  data() {
    return {
      // 所有菜单
      list: MenuData.menus,
      // 二级菜单
      leftMenu: MenuData.menus[0].childFunction,
      // 第一个菜单
      showIdx: -1
    };
  },
  methods: {
    refactMenu(idx) {
      // this.showIdx = -1;
      this.leftMenu = this.list[idx] && this.list[idx].childFunction;
    },
    //  重置二级菜单的隐藏
    resetShowFlag(idx) {
      this.showIdx = idx;
    }
  },
  created() {
  },
  mounted() {
    // this.$router.push({name: 'myPanel', params: {idx: 0}});
    // 功能菜单存在localstorage
    this.$Utils.setData("menus", MenuData.menus);
    if(this.$route.path == "/") { // 根目录访问时,默认触发第一个tab
      this.$refs.topNav.resetIdx(0)
      this.$router.push({name: this.list[0].funcUrl, params: {idx: 0, topClick: true}});
    }
  },
  updated() {},
  watch: {
    '$route' (to, from) {
      if(to.path == "/") { // 根目录访问时,默认触发第一个tab
        this.$refs.topNav.resetIdx(0)
        this.$router.push({name: this.list[0].funcUrl, params: {idx: 0, topClick: true}});
      }
    }
  }
};
</script>

<style lang="scss">
.clearfix{
  zoom:1;
}
.fleft{
  float: left;
}
.layout-index {
  width: 100%;
  .top {
    background: #4778c7;
    height: 66px;
    color: #fff;
    .top-nav{
      height: 100%;
      width: calc(100% - 218px);
    }
    .logo {
      line-height: 66px;
      height: 66px;
      float: left;
      width: 198px;
      padding-left: 20px;
      img {
        vertical-align: middle;
      }
    }
  }
}
</style>
