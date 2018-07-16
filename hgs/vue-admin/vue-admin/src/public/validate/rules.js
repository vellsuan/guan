// 配置验证规则
export const validateRules = {
  mobile: {
    messages: {
      // 错误提示消息
      zh_CN: field => '手机号码输入不正确'
    },
    validate: value => {
      // 字段校验规则
      return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
    }
  },
  idCard: {
    messages: {
      zh_CN: field => '身份证号码输入不正确'
    },
    validate: value => {
      var reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
      // 18位
      var regs = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
      return reg.test(value) || regs.test(value);
    }
  },
  passWord: {
    messages: {
      zh_CN: field => '密码需为8-16位数字与字母组合'
    },
    validate: value => {
      let reg1 = /\d+/;
      let reg2 = /[a-zA-Z]/;
      return value.length >= 8 && value.length <= 16 && reg1.test(value) && reg2.test(value);
    }
  },
  passWord1: {
    messages: {
      zh_CN: field => '密码需为6位数字'
    },
    validate: value => {
      let reg = /^\d{6}$/;
      return value.length == 6 && reg.test(value);
    }
  }
}
