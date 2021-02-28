/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  //  {
  //   path: '/',
  //   component: () => import('@/components/layouts/TabBerDate'),
  //   redirect: '/home',
  //   meta: {
  //     title: '首页',
  //     keepAlive: false
  //   },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index'),
    meta: { title: '首页', keepAlive: false },
    children: []
  },
  {
    path: '/item/:index',
    name: 'Items',
    component: () => import('@/views/items/Items')
  },
  {
    path: '/sort',
    name: 'Sort',
    component: () => import('@/views/sort/index'),
    meta: { title: '分类', keepAlive: false }
  },
  {
    path: '/topic',
    name: 'Topic',
    component: () => import('@/views/topic/index'),
    meta: { title: '识物', keepAlive: false }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/cart/index'),
    meta: { title: '购物车', keepAlive: false }
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/views/user/index'),
    meta: { title: '个人', keepAlive: false }
  },
  {
    path: '/manufacturer/:id',
    name: 'Manufacturer',
    component: () => import('@/views/manufacturer')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/components/common/VantSearch')
  }
]
