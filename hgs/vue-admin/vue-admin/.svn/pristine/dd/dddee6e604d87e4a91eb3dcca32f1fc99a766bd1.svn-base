<template>
  <div class="order-order-list">
    <TopSearchBar
      ref="topSearchBar"
      @getPageData="renderList"
      :currentPage="currentPage"
      :pageCount="pageCount">
    </TopSearchBar>
    <div class="order-list-content">
      <div class="order-list-btn">
        <el-button @click="toggleSelection()">取消选择</el-button>
      </div>
      <div class="tab-list">
        <el-table
          ref="multipleTable"
          :data="tableData"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            header-align="center"
            width="55">
          </el-table-column>
          <el-table-column
            type="index"
            label="序号"
            header-align="center"
            width="180">
          </el-table-column>
          <el-table-column
            prop="orderSn"
            label="订单号"
            header-align="center"
            width="180">
          </el-table-column>
          <el-table-column
            prop="shopName"
            header-align="center"
            label="所属门店">
          </el-table-column>
          <el-table-column
            prop="branchName"
            header-align="center"
            label="所属平台">
          </el-table-column>
          <el-table-column
            prop="addTime"
            :formatter="formatTime"
            header-align="center"
            label="下单时间">
          </el-table-column>
        </el-table>
        <div v-show="pageTotal">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="pageSizes"
            :page-size="pageCount"
            :layout="pageLayout"
            :total="pageTotal">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopSearchBar from './TopSearchBar'

export default {
  name: 'orderList',
  components: {
    TopSearchBar: TopSearchBar
  },
  data () {
    return {
      topSearchBar: null,
      tableData: [],
      currentPage: 1,
      pageCount: 10,
      pageSizes: [5, 10, 15, 20],
      pageLayout: 'total, sizes, prev, pager, next, jumper',
      pageTotal: 0,
      multipleSelection: []
    }
  },
  methods: {
    handleSizeChange (val) {
      this.pageCount = val
      this.$nextTick(() => {
        this.$refs.topSearchBar.searchList()
      })
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.$nextTick(() => {
        this.$refs.topSearchBar.searchList()
      })
    },
    renderList (pageData = {}) {
      this.tableData = pageData.datas || []
      this.pageTotal = pageData.totalRowCount
    },
    formatTime (row, column, cellValue, index) {
      let yy, mm, dd
      let formatTime = ''
      if (cellValue != '') {
        let time = new Date(parseInt(cellValue))
        yy = time.getFullYear()
        mm = (time.getMonth() + 1)
        if (mm < 10) {
          mm = '0' + mm
        }
        dd = time.getDate()
        if (dd < 10) {
          dd = '0' + dd
        }
        formatTime = yy + '-' + mm + '-' + dd
      }
      return formatTime
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    toggleSelection () {
      this.$refs.multipleTable.clearSelection()
    }
  }
}
</script>

<style lang="scss">
  .order-list-btn {
    background-color: #fff;
    text-align: left;
    border-bottom: 1px solid #E4E4E4;
    padding: 10px 20px;
  }
</style>
