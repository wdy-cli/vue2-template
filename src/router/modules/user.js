import Layout from '@/layout'
export default [
  {
    path: '/user',
    name: 'User',
    component: Layout,
    redirect: '/user/list',
    meta: {
      title: '用户管理'
    },
    children: [
      {
        path: 'list',
        name: 'UserList',
        alwaysShow: true,
        component: () => import('@/pages/user-manage/index'),
        meta: { title: '优惠券管理' }
      }
    ]
  }
]
