const orderListPage = () => import('@/pages/order_manager/order_list/Index').then(m => m.default)

const order = [
  {
    name: 'orderList',
    path: '/order/orderList',
    component: orderListPage
  }
]

export default order
