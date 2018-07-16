// https://eslint.org/docs/user-guide/configuring
// 中文版ESlint解释 https://github.com/standard/standard/blob/master/docs/RULES-zhcn.md
module.exports = {
  //此项是用来告诉eslint找当前配置文件不能往父级查找
  root: true,
  //此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
  parserOptions: {
    parser: "babel-eslint"
  },
  //此项指定环境的全局变量，下面的配置指定为浏览器环境
  env: {
    browser: true
  },
  // 此项是用来配置标准的js风格，就是说写代码的时候要规范的写，如果你使用vs-code我觉得应该可以避免出错
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    "plugin:vue/essential",
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    "standard"
  ],
  // required to lint *.vue files
  // 此项是用来提供插件的，插件名称省略了eslint-plugin-，下面这个配置是用来规范vue的
  plugins: ["vue"],
  // add your custom rules here
  // 下面这些rules是用来设置从插件来的规范代码的规则，使用必须去掉前缀eslint-plugin-
  // 主要有如下的设置规则，可以设置字符串也可以设置数字，两者效果一致
  // "off" -> 0 关闭规则
  // "warn" -> 1 开启警告规则
  //"error" -> 2 开启错误规则
  rules: {
    // allow async-await
    "generator-star-spacing": "off",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // 始终使用 === 替代 ==     设置了禁止,可以使用==了
    eqeqeq: "off",
    // 字符串统一使用单引号 关闭
    quotes: "off",
    // 关键字后面加空格
    "keyword-spacing": "off",
    // 函数声明时括号与函数名间加空格
    "space-before-function-paren": "off",
    // 使用浏览器全局变量时加上 window. 前缀
    "no-undef": "off",
    // 不允许有连续多行空行
    "no-multiple-empty-lines": "warn",
    // 每个 var 关键字单独声明一个变量
    "one-var": "off",
    // 单行代码块两边加空格
    "block-spacing": "warn",
    // 文件末尾留一空行
    "eol-last": "off",
    // 键值对当中冒号与值之间要留空白
    "key-spacing": "warn",
    // 对象中定义了存值器，一定要对应的定义取值器
    "accessor-pairs": "warn",
    // 不要使用 debugger。
    "no-debugger": "off",
    // 同一模块有多个导入时一次性写完
    "no-duplicate-imports": "warn",
    // 正则中不要使用空字符。
    "no-empty-character-class": "off",
    // 禁止使用 __iterator__
    "no-iterator": "off",
    // new 创建对象实例后需要赋值给变量。
    "no-new": "warn",
    // 禁止使用 Symbol 构造器。
    "no-new-symbol": "off",
    // 禁止使用原始包装器
    "no-new-wrappers": "off",
    // 如果有更好的实现，尽量不要使用三元表达式
    "no-unneeded-ternary": "off",
    // 代码块首尾留空格
    "space-before-blocks": "warn",
    // 请书写优雅的条件语句
    "yoda": "off",
    // 不要使用分号
    "semi": "off",
    //禁止所有标签（无标签）
    "no-tabs" : "off",
    //不允许混合空格和制表符缩进（无混合空格和制表符）
    "no-mixed-spaces-and-tabs" : "off"
  }
};
