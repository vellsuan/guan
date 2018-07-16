const goodsList = () => import("../pages/goods_manager/goods_list/Index").then(m => m.default);

const gsIndex = [
  {
    path: '/gsIndex',
    name: 'gsIndex',
    component: goodsList
  }
]

export default gsIndex;
