import VeeValidate, { Validator } from "vee-validate";
import zh from "vee-validate/dist/locale/zh_CN";
import { validateRules } from './rules';
import { dictionary } from './dictionary';

// 合并验证规则
Object.keys(validateRules).forEach((key) => {
  Validator.extend(key, validateRules[key]);
  // 合并验证消息
  Object.keys(validateRules[key].messages).forEach(locale => {
    Validator.localize({
      [locale]: {
        messages: {
          [key]: validateRules[key].messages[locale]
        }
      }
    })
  })
});

// 原始消息变为中文
Validator.localize(zh, dictionary.zh_CN);

const Veeconfig = {
  locale: 'zh_CN',
  events: 'blur',
  fieldsBagName: 'vee-fields'
};

// 读取自定义字典
Validator.localize(dictionary);

export const Validate = (Vue) => {
  Vue.use(VeeValidate, Veeconfig);
}
