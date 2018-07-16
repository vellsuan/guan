<template>
    <div class="goods-list-index">
      <seach-bar @getList="getList" ref="queryList" :currentPageNum = 'currentPageNum' :pageCount = 'pageCount'></seach-bar>
      <render-list :list="list" :totalPage="totalPage" @getNumber="getNumber" ></render-list>
    </div>
</template>

<script>
// import moduleName from 'module'
import SeachBar from './SeachBar';
import RenderList from './RenderList';

export default {
  name: '',
  components: {
    SeachBar: SeachBar,
    RenderList: RenderList
  },
  data () {
    return {
      list: [],
      currentPageNum: 1,
      pageCount: 10,
      totalPage: 0
    }
  },
  methods: {
    getList (data) {
      this.list = data.list || [];
      this.totalPage = data.totalPage || [];
    },
    getNumber (data) {
      this.currentPageNum = data.currentPageNum;
      this.pageCount = data.pageCount;
      this.$nextTick(() => this.$refs.queryList.searchFun());
    }
  },
  created () {

  },
  mounted () {

  },
  updated () {

  }
}
</script>

<style lang="scss" module>
.head-line{
  width:100%;
  em{
    width: 33px;
    height: 33px;
    border-radius: 100%;
    background-color: bisque;
    vertical-align: middle;
  }
}
</style>
