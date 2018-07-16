<template>
    <div class="goods-list-renderList">
      <el-table
        ref="multipleTable"
        :data="list"
        tooltip-effect="dark"
        style="width: 100%"
        >
        <el-table-column
          type="selection"
          prop="id"
          align="center"
          width="55">
        </el-table-column>
        <el-table-column
          label="编号"
          align="center"
          prop="productNumber"
          width="120">
        </el-table-column>
        <el-table-column
          label="来源"
          :formatter="productSourcingFun"
          align="center"
          width="120">
        </el-table-column>
        <el-table-column
          prop="productName"
          align="center"
          label="商品名称"
         >
        </el-table-column>
        <el-table-column
          prop="productNumber"
          align="center"
          label="商品编码"
         >
        </el-table-column>
        <el-table-column
          prop="price"
          align="center"
          label="价格"
         >
        </el-table-column>
        <el-table-column
          align="center"
          label="堂食/外卖"
          :formatter="takeOutFun"
         >
        </el-table-column>
        <el-table-column
          prop="productName"
          align="center"
          label="排序"
          >
        </el-table-column>
        <el-table-column
          label="管理操作"
          align="center"
          >
          <template slot-scope="scope">
            <el-button  type="text" size="small" class="changeBtn" @click="changeFun(scope.row.productId)">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40, 50]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalPage">
      </el-pagination>
    </div>
</template>

<script>
// import moduleName from 'module'

export default {
  name: '',
  components: {},
  data () {
    return {
      'currentPage': 1,
      'pageCount': 10
    }
  },
  methods: {
    changeFun (scope) {},
    takeOutFun (row, cloume) {
      let takeout = row.takeout;
      if(takeout == '1') {
        return '堂食';
      } else if(takeout == '2') {
        return '外卖';
      }
    },
    productSourcingFun (row, cloume) {
      let productSourcing = row.productSourcing;
      if(productSourcing == '2') {
        return '本地商品';
      } else if(productSourcing == '3') {
        return '天子星';
      } else if(productSourcing == '4') {
        return '自助商品'
      }
    },
    handleSizeChange(val) {
      this.pageCount = val;
      this.$emit('getNumber', {
        "pageCount": val,
        "currentPageNum": this.currentPage
      })
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.$emit('getNumber', {
        "pageCount": this.pageCount,
        "currentPageNum": val
      })
    }
  },
  created () {

  },
  mounted () {
  },
  updated () {

  },
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    },
    totalPage: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" module>

</style>
