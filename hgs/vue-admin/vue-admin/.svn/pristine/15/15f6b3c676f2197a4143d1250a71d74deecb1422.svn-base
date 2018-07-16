<template>
  <div class="order-top-search-bar">
    <form action="">
      <ul class="clearfix">
        <li class="fleft">
          <i class="el-icon-search"></i>
        </li>
        <li class="fleft">
          <label>关键词：</label>
          <el-input placeholder="订单号/手机号/门店名称/" v-model="keyWord"></el-input>
        </li>
        <li class="fleft">
          <label>订单状态：</label>
          <el-select v-model="selectOrderStatue" placeholder="请选择">
            <el-option
              v-for="item in orderStatue"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </li>
        <li class="fleft">
          <label>下单时间：</label>
          <el-date-picker
            v-model="datePickerVal"
            type="daterange"
            value-format="yyyy-MM-dd"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </li>
        <li class="fleft">
          <el-button type="primary" @click="searchList">搜索</el-button>
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TopSearchBar',
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    pageCount: {
      type: Number,
      default: 10
    }
  },
  data () {
    return {
      keyWord: "", // 关键词
      orderStatue: [ // 订单状态列表
        {
          value: 0,
          label: '未接单'
        },
        {
          value: 1,
          label: '已接单'
        }
      ],
      selectOrderStatue: '', // 订单状态
      datePickerVal: '' // 开始、结束日期
    }
  },
  mounted () {
    this.searchList();
  },
  methods: {
    searchList () {
      let params = {
        url: "OR900001",
        data: {
          currentPageNum: this.currentPage,
          pageCount: this.pageCount,
          orderSnOrTel: this.keyWord,
          orderStatus: this.selectOrderStatue,
          startTime: this.datePickerVal[0] || "",
          endTime: this.datePickerVal[1] || ""
        },
        callback: res => {
          let {page} = res;
          this.$emit("getPageData", page)
        }
      };
      this.$http.sendRequest(params)
    }
  }
}
</script>

<style lang="scss">
  .order-top-search-bar {
    background-color: #fff;
    border: 1px solid #E4E4E4;
    padding: 10px 0;
    margin-bottom: 20px;
    > form {
      > ul {
        > li {
          width: 230px;
          > div {
            width: calc(100% - 6em);
          }
        }
        > li:first-child {
          width: 40px;
          line-height: 40px;
          font-size: 26px;
          color: #c1cad6;
        }
        > li:nth-last-child(2) {
          width: 430px;
        }
        > li:last-child {
          width: 100px;
        }
      }
    }
  }
</style>
