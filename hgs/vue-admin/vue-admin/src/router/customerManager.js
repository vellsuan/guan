const customerList = () => import("../pages/customer_manager/customer_list/Index").then(m => m.default);
const customerContent = () => import("../pages/customer_manager/customer_list/CustomerContent").then(m => m.default);
const cmIndex = [
  {
    path: '/cmIndex/customerList',
    name: 'customerList',
    component: customerList
  },
  {
    path: '/cmIndex/customerContent',
    name: 'customerContent',
    component: customerContent
  }
]

export default cmIndex;