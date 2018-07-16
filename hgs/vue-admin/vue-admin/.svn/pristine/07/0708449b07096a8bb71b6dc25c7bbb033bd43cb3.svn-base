<template>
  <div class="index-left clearfix">
    <div class="layout-left fleft">
      <div class="left-nav">
        <dl v-for="(item,index) in list" :key="item.funModuleId" :data-id="item.funModuleId">
          <dt @click="showMenu(index)">
            <em></em>
            <span>{{item.name}}</span>
          </dt>
          <dd v-for="obj in item.childFunction" :class="{show:showIdx===index}" :key="obj.funModuleId">
            <em></em>
            <span>
              <!-- {{obj.name}} -->
              <router-link :to="{ name: obj.funcUrl}" tag="p">{{obj.name}}</router-link>
            </span>
          </dd>
        </dl>
      </div>
    </div>
    <div class="container fleft">
      <div class="content fleft">
        <div class="bread">面包屑</div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "",
  components: {
  },
  data() {
    return {
      showIdx: -1,
      list: this.$Utils.getData("menus")[0]["childFunction"]
    };
  },
  methods: {
    showMenu(idx) {
      if(this.showIdx == idx) {
        this.showIdx = -1;
      }else{
        this.showIdx = idx;
      }
    }
  },
  created() {},
  mounted() {},
  updated() {},
  watch: {
    '$route' (to, from) {
      let params = this.$route.params;
      if(params.topClick) {
        this.showIdx = -1;
      }
      this.list = this.$Utils.getData("menus")[params.idx]["childFunction"];
    }
  },
  props: {
    idx: {
      type: Number,
      default: 0
    }
    // list: {
    //   type: Array,
    //   default: () => {
    //     return [];
    //   }
    // },
    // showIdx: {
    //   type: Number,
    //   default: -1
    // }
  }
};
</script>

<style lang="scss">
.index-left{
  dt{
    cursor: pointer;
    height: 55px;
    line-height: 55px;
    text-align: left;
    padding-left:16px;
    border-bottom: 1px solid #E8E8EA;
  }
  dd{
    cursor: pointer;
    display: none;
    height: 44px;
    line-height: 44px;
    text-align: left;
    padding-left:30px;
    color: #A5A5A5;
  }
  .show{
    display: block;
  }
  .left-nav {
    width: 218px;
    background:#fff;
    min-height: 294px;
  }
  .container{
    width: calc(100% - 218px);
    min-height: 294px;
    background: #F1F1F1;
  }
  .bread{
    height: 43px;
    line-height: 43px;
    text-align: left;
  }
  .content{
      padding-left: 16px;
      width: calc(100% - 240px);
      // background: green;
      min-height: 294px;
    }
}

</style>