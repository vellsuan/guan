<template>
    <div class="customer-content">
        <div class="tab-list">
        <el-table  style="width: 100%">
          <el-table-column prop="date" label="序号" header-align="center">
          </el-table-column>
          <el-table-column prop="name"  label="门店名称"  header-align="center">
          </el-table-column>
          <el-table-column prop="type" header-align="center" label="类型">
          </el-table-column>
          <el-table-column prop="note" header-align="center" label="管理操作">
          </el-table-column>
        </el-table>
      </div>
    </div>
</template>

<script>
// import bannerSearch from './bannerSearch';

export default {
  name: 'customerContent',
  components: {},
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

</style>
