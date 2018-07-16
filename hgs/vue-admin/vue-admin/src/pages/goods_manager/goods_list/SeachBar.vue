<template>
    <div class="goods-list-seachbar clearfix">
      <el-input v-model="productNameKey" class="productNameKey fleft"  placeholder="商品编/商品名称"></el-input>
      <el-select v-model="productSourcing" class="productSourcing fleft" placeholder="商品来源">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button type="primary" @click="searchFun" class="search-btn fleft">搜索</el-button>
    </div>
</template>

<script>
/* eslint-disable comma-dangle */

// import moduleName from 'module'
export default {
  name: '',
  components: {},
  data () {
    return {
      productSourcing: '',
      productNameKey: '',
      list: [],
      options: [{
        value: '',
        label: '请选择',
      }, {
        value: '2',
        label: '本地产品',
      }, {
        value: '3',
        label: '天子星',
      }, {
        value: '4',
        label: '自助产品',
      }],
    }
  },
  methods: {
    searchFun() {
      let params = {
        url: 'PR100007',
        data: {
          "productSourcing": this.productSourcing,
          "productNameKey": this.productNameKey,
          "currentPageNum": this.currentPageNum,
          "pageCount": this.pageCount
        },
        method: 'post',
        callback: res => {
          this.list = res && res.page && res.page.datas;
          this.$emit("getList", {
            list: this.list,
            totalPage: res && res.page && res.page.totalPage
          });
        },
        errcallback: msg => {
          console.log(msg);
        }
      }
      this.$http.sendRequest(params);
    }
  },
  created () {

  },
  mounted () {
    this.searchFun()
  },
  updated () {

  },
  props: {
    currentPageNum: {
      type: Number,
      default: 1
    },
    pageCount: {
      type: Number,
      default: 10
    }
  }
}
</script>

<style lang="scss">
  .goods-list-seachbar{
    .productNameKey{
      width: 300px;
      margin-right: 30px;
    }
    .search-btn{
      margin-left: 30px;
      background-color: #428bca;
      border-color: #357ebd;
    }
  }
</style>
