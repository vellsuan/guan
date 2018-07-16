const Login = () => import("../pages/login/Index").then(m => m.default);

const loginPage = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {authed: true} // 无需校验是否登录
  }
]

export default loginPage;
