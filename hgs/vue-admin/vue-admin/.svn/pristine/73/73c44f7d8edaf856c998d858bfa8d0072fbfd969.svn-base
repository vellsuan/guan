import axios from "axios";
import qs from "qs";
import { Message } from "element-ui";
import router from "../../router";

const Axios = axios.create({
  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: "/",
  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  // 如果请求花费了超过 `timeout` 的时间，请求将被中断
  timeout: "10000",
  // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: "json",
  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: true,
  // `headers` 是即将被发送的自定义请求头
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  }
});

// POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(
  config => {
    // 在发送请求之前做某件事
    if (config.method === "post") {
      // 序列化
      config.data = qs.stringify(config.data);
      // 温馨提示,若是提交能直接接受json 格式,可以不用 qs 来序列化的
    }

    // 若是有做鉴权token , 就给头部带上token
    // 若是需要跨站点,存放到 cookie 会好一点,限制也没那么多,有些浏览环境限制了 localstorage 的使用
    if (localStorage.token) {
      config.headers.Authorization = localStorage.token;
    }
    return config;
  },
  error => {
    // error 的回调信息,看自己的定义
    Message({
      //  饿了么的消息弹窗组件,类似toast
      showClose: true,
      message: error,
      type: "error.data.error.message"
    });
    return Promise.reject(error.data.error.message);
  }
);

// 返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(
  res => {
    // 对响应数据做些事
    if (res.data && !res.data.success) {
      Message({
        //  饿了么的消息弹窗组件,类似toast
        showClose: true,
        message: res.data.error.message.message || res.data.error.message,
        type: "error"
      });
      return Promise.reject(res.data.error.message);
    }
    return res;
  },
  error => {
    // 用户登录的时候会拿到一个基础信息,比如用户名,token,过期时间戳
    // 直接丢localStorage或者sessionStorage
    if (!window.localStorage.getItem("loginUserBaseInfo")) {
      // 若是接口访问的时候没有发现有鉴权的基础信息,直接返回登录页
      router.push({
        path: "/login"
      });
    } else {
      // 若是有基础信息的情况下,判断时间戳和当前的时间,若是当前的时间大于服务器过期的时间
      // 乖乖的返回去登录页重新登录
      let lifeTime =
        JSON.parse(window.localStorage.getItem("loginUserBaseInfo")).lifeTime *
        1000;
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
    let errorInfo = error.data.error ? error.data.error.message : error.data;
    return Promise.reject(errorInfo);
  }
);

// 对 axios 的实例重新封装成一个 plugin ,方便 Vue.use(xxxx)
export default {
  install: (Vue, Option) => {
    Object.defineProperty(Vue.prototype, "$http", { value: Axios });
  }
};
