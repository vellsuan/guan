<template>
    <div class="customer-list-index">
      <banner-search></banner-search>
      <div class="customer-content">
        <div class="tab-list">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="序号" header-align="center">
          </el-table-column>
          <el-table-column prop="name"  label="门店名称"  header-align="center">
          </el-table-column>
          <el-table-column prop="num" header-align="center" label="门店编码">
          </el-table-column>
          <el-table-column prop="tab" header-align="center" label="所属平台">
          </el-table-column>
          <el-table-column prop="address" header-align="center" label="地址">
          </el-table-column>
          <el-table-column prop="phone" header-align="center" label="电话">
          </el-table-column>
          <el-table-column prop="type" header-align="center" label="类型">
          </el-table-column>
          <el-table-column prop="date" header-align="center" label="创建时间">
          </el-table-column>
          <el-table-column prop="note" header-align="center" label="管理操作">
          </el-table-column>
        </el-table>
      </div>
      </div>
    </div>
</template>

<script>
import bannerSearch from './bannerSearch';

export default {
  name: 'customerList',
  components: {
    bannerSearch
  },
  data () {
    return {
    }
  },
  methods: {

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
