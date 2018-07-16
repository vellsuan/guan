<template>
  <div class="banner-search">
    <form action="">
      <ul class="clearfix">
        <li class="fleft">
          <i class="el-icon-search"></i>
        </li>
        <li class="fleft">
          <label>门店名称：</label>
          <el-input placeholder=""></el-input>
        </li>
        <li class="fleft">
          <label>编号：</label>
          <el-input placeholder=""></el-input>
        </li>
        <li class="fleft">
          <label>所属平台：</label>
          <el-select v-model="selectOrderStatue" placeholder="全平台">
            <el-option
              v-for="item in orderStatue"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </li>
        <li class="fleft">
          <label>地区：</label>
          <el-select v-model="selectOrderStatue" placeholder="全平台">
            <el-option
              v-for="item in orderStatue"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </li>
        <li class="fleft">
          <label>类型：</label>
          <el-select v-model="selectOrderStatue" placeholder="全选">
            <el-option
              v-for="item in orderStatue"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </li>
        <li class="fleft">
          <el-button type="primary">搜索</el-button>
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
export default {
  name: 'bannerSearch',
  data () {
    return {
      orderStatue: [
        {
          value: 0,
          label: '未接单'
        },
        {
          value: 1,
          label: '已接单'
        }
      ],
      selectOrderStatue: '',
      datePickerVal: ''
    }
  }
}
</script>

<style lang="scss">
  .banner-search {
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
