/*
 * @Author: 刘欢
 * @Date: 2017-11-06 10:23:09
 * @Last Modified by: luckelectricity
 * @Last Modified time: 2018-06-07 10:51:09
 */
import Qs from 'qs';
// import { Message } from "element-ui";
// import router from "../../router";

export default {
  url: "",
  method: "post",
  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: "/org/business/",
  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  // transformRequest: [
  //   data => data
  // ],

  transformResponse: [
    /*  res => {
      // 对响应数据做些事
      console.log(res);
      if (res.result && res.code !== "000000" && res.code !== "999999") {
        Message({ //  饿了么的消息弹窗组件,类似toast
          showClose: true,
          message: res.message,
          type: "error"
        });
        return Promise.reject(res.message);
      }
      return res;
    },
    error => {
      console.log(error);
      // 用户登录的时候会拿到一个基础信息,比如用户名,token,过期时间戳
      // 直接丢localStorage或者sessionStorage
      /*  if (!window.localStorage.getItem("loginUserBaseInfo")) {
        // 若是接口访问的时候没有发现有鉴权的基础信息,直接返回登录页
        router.push({
          path: "/login"
        });
      } else {
        // 若是有基础信息的情况下,判断时间戳和当前的时间,若是当前的时间大于服务器过期的时间
        // 乖乖的返回去登录页重新登录
        let lifeTime =
          JSON.parse(window.localStorage.getItem("loginUserBaseInfo"))
            .lifeTime * 1000;
        let nowTime = new Date().getTime(); // 当前时间的时间戳
        console.log(nowTime, lifeTime);
        console.log(nowTime > lifeTime);
        if (nowTime > lifeTime) {
          Message({
            showClose: true,
            message: "登录状态信息过期,请重新登录",
            type: "error"
          });
          router.push({
            path: "/login"
          });
        } else {
          // 下面是接口回调的satus ,因为我做了一些错误页面,所以都会指向对应的报错页面
          if (error.response.status === 403) {
            router.push({
              path: "/error/403"
            });
          }
          if (error.response.status === 500) {
            router.push({
              path: "/error/500"
            });
          }
          if (error.response.status === 502) {
            router.push({
              path: "/error/502"
            });
          }
          if (error.response.status === 404) {
            router.push({
              path: "/error/404"
            });
          }
        }
      }
      // 返回 response 里的错误信息
      // let errorInfo = error.data.error ? error.data.error.message : error.data;
      return Promise.reject(error);
    } */
  ],
  // 请求头在这里配置
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    developToken: "000006",
    tokenPassword: "1qaz2wsx"
  },
  params: {},

  paramsSerializer: params => {
    Qs.stringify(params);
  },
  data: {},
  timeout: 10000,

  withCredentials: false, // default

  responseType: "json", // default
  // 将upload事件注释掉，防止跨域状态下发起option请求

  // onUploadProgress: function(progressEvent) {
  // Do whatever you want with the native progress event
  // },

  // onDownloadProgress: function(progressEvent) {
  // Do whatever you want with the native progress event
  // },

  maxContentLength: 2000,

  validateStatus: function(status) {
    return status >= 200 && status < 300; // default
  },

  maxRedirects: 5 // default
};
