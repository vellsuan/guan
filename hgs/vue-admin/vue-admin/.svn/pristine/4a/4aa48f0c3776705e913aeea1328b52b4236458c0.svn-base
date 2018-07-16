<template>
  <div class="login-index">
    <el-container class="positionA">
      <div class="login-main">
        <div class="login-con-l fleft">
          <div class="login-logo">
            <img src="./img/login_logo.jpg" />
          </div>
          <div class="manager_name">
            <h2 class="tcenter">欢迎登录后台管理系统</h2>
            <ul class="clearfix">
              <li class="fleft"></li>
              <li class="fleft tcenter">Welcome to login</li>
              <li class="fleft"></li>
            </ul>
          </div>
        </div>
        <div class="login_con_r fleft">
          <h2>管理员登录
            <span>login</span>
          </h2>
          <el-form ref="form" v-model="ruleForm">
            <p class="yzInfo">{{msg}}</p>
            <el-form-item>
              <div class="input-div">
                <span class="label-span">用户名</span>
                <el-input type="text" name="username" v-validate="'required'" data-vv-as="用户名" v-model="ruleForm.username"></el-input>
              </div>
              <p><span v-show="errors.has('username')" class="">{{errors.first('username')}}</span></p>
            </el-form-item>
            <el-form-item>
              <div class="input-div">
                <span class="label-span">密 码</span>
                <el-input type="password" name="password" v-validate="'required|passWord1'" data-vv-as="密码" v-model="ruleForm.password"></el-input>
              </div>
              <p><span v-show="errors.has('password')" class="">{{errors.first('password')}}</span></p>
            </el-form-item>
             <Verify @success="verifyMessage('success')" @error="verifyMessage('error')" :type="3" :barSize="{width:'354px',height:'40px'}" :explain="explain" ref="instance"></Verify>
            <el-form-item class="form-button">
              <el-button @click="submit(ruleForm)" to="/index">登录</el-button><el-button @click="resetInfo()">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>
import md5 from "md5";
// import { getUuId } from "@/public/uitl.js";
import Verify from 'vue2-verify'

export default {
  name: 'loginIndex',
  components: {
    Verify
  },
  data() {
    return {
      flag: '',
      msg: '',
      ruleForm: {
        username: "",
        password: ""
      },
      uuid: "",
      extraCode: '',
      explain: '向右滑动完成验证'
    }
  },

  methods: {
    resetInfo() {
      this.ruleForm.username = "";
      this.ruleForm.password = "";
      this.$refs.instance.refresh();
      this.extraCode = '';
    },

    verifyMessage(text) {
      if(text == "success") {
        this.verifySuccess();
      }else if(text == "error") {
        this.verifyError();
      }
    },

    verifySuccess(text) {
      this.msg = "";
      let params = {
        url: 'CM300002',
        data: {
          browserCode: this.uuid
        },
        method: 'post',
        isLoading: true,
        callback: res => {
          this.extraCode = res.extraCode;
        },
        errcallback: msg => {
          console.log("滑块验证失败");
        }
      }
      this.$http.sendRequest(params);
    },

    verifyError(text) {
      this.msg = "滑块验证失败！"
    },

    submit(ruleForm) {
      this.$validator.validateAll().then((rst) => {
        if(rst) {
          if(this.extraCode) {
            this.msg = "";
            let params = {
              url: 'CM300001',
              data: {
                name: this.ruleForm.username,
                loginPwd: md5(this.ruleForm.password),
                browserCode: this.uuid,
                extraCode: this.extraCode
              },
              method: 'post',
              callback: res => {
              // 获取用户信息
              // 获取用户信息，并且存放到localStorage中的userInfo中
                let userParams = {
                  url: 'CM300008',
                  data: {
                  },
                  method: 'post',
                  callback: res => {
                    this.$Utils.setData("userInfo", res.entity || {});
                    this.$router.push({path: "/"});
                  },
                  errcallback: msg => {
                    console.log(msg);
                  }
                };
                this.$http.sendRequest(userParams);
              },
              errcallback: msg => {
                this.$refs.instance.refresh();
                this.msg = msg;
              }
            }
            this.$http.sendRequest(params);
          }else{
            this.msg = "请拖动滑块验证";
          }
        }else{
          this.$refs.instance.refresh();
          this.extraCode = '';
        }
      })
    }
  },

  created() {
    if(!this.uuid) {
      this.uuid = this.$Utils.getUuId();
      // localStorage.setItem("uuid", this.uuid);
      this.$Utils.setData("uuid", this.uuid);
    }
  },
  mounted() {

  },
  updated() {

  }
}
</script>

<style lang="scss">
.login-index {
  width: 100%;
  height: 100%;
  min-width: 1280px;
  background: url(./img/login_bg.png) no-repeat center center;
  background-color: #4A85E1;
  .el-container {
    width: 804px;
    height: 354px;
    left: 50%;
    top: 50%;
    margin: -177px 0 0 -402px;
    background-color: #fff;
    -moz-box-shadow: 2px 2px 8px #002862;
    -webkit-box-shadow: 2px 2px 8px #002862;
    box-shadow: 2px 2px 8px #002862;
    .login-main {
      padding: 0;
      height: 276px;
      width: 100%;
      margin-top: 40px;
      .login-con-l {
        width: 264px;
        height: 166px;
        border-right: 1px solid #CCDCF5;
        padding: 54px 45px;
        .login-logo {
          width: 264px;
          height: 75px;
          user-select: none;
        }
        .manager_name {
          width: 262px;
          height: 60px;
          padding-top: 13px;
          border: 1px solid #C9DEF1;
          background-color: #EEF5FF;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          -o-user-select: none;
          user-select: none;
          h2 {
            font-size: 20px;
            color: #4D7DC5;
            font-weight: normal;
          }
          ul {
            padding-top: 8px;
            li:first-child,
            li:last-child {
              width: 65px;
              height: 8px;
              border-bottom: 1px solid #C9DEF1;
            }
            li:nth-child(2) {
              width: 132px;
              font-size: 12px;
              color: #84A4D3;
            }
          }
        }
      }
      .login_con_r {
        height: 276px;
        width: 359px;
        padding: 0 44px;
        h2 {
          font-size: 22px;
          color: #1B73CC;
          font-weight: normal;
          user-select: none;
          text-align: left;
          span {
            margin-left: 10px;
            color: #CCCCCC;
          }
        }
        .el-form{
          p{
              padding-left: 2px;
              height: 18px;
              line-height: 18px;
              font-size: 12px;
              color: #e12937;
              text-align: left;
            }
          .el-form-item{
            margin-bottom:0;
            .input-div{
              width: 357px;
              height: 40px;
              background-color: #EEF5FF;
              border: 1px solid #C9DBF3;
              text-align: left;
              .el-input{
                width:240px;
                input{
                  border:0;
                  height:40px;
                  padding-left: 10px;
                  background-color: #EEF5FF;
                  width:220px;
                }
              }
              .label-span{
                display: inline-block;
                vertical-align: middle;
                height: 40px;
                line-height: 40px;
                padding-left: 40px;
                width: 45px;
                text-align: right;
                color: #4D7DC7;
                background: url(./img/user_name.png) no-repeat 9px center;
              }
            }
            .el-button{
              border-radius: 3px;
              height: 46px;
              font-size: 18px;
              color: #fff;
              background-color: #4D7DC5;
              width: 170px;
              cursor: pointer;
              border:0;
            }
            .el-button:nth-child(2){
              height: 44px;
              width: 168px;
              background-color: #ECECEC;
              border: 1px solid #DDDDDD;
              color: #787878;
              margin-left: 16px;
            }
          }
          .el-form-item:nth-child(2){
            .label-span{
              background: url(./img/password.png) no-repeat 9px center;
            }
          }
          .verify-btn{
            display: none;
          }
          .form-button{
            margin-top: 18px;
          }
          .verify-bar-area .verify-left-bar{
            background: transparent;
          }
        }
      }
    }
  }
}
</style>
