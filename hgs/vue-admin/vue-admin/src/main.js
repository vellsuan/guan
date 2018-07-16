// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import { Validate } from "./public/validate";
import { EleUI } from "./public/ele_ui";
import Utils from "./public/utils";
// 需要修改,暂时先用 以后改为server文件夹
import http from "./public/api";
import "./assets/css/com.css";

Validate(Vue);
EleUI(Vue);

Vue.use(http)

Vue.config.productionTip = false;
Vue.prototype.$Utils = Utils;
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
