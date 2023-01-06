// import Layout from '@/layout'
// export default [
//   {
//     path: '/marketing',
//     name: 'Marketing',
//     component: Layout,
//     redirect: '/marketing/coupon',
//     meta: {
//       title: '营销中心'
//     },
//     children: [
//       {
//         path: 'coupon',
//         name: 'Coupon',
//         alwaysShow: true,
//         redirect: '/marketing/coupon/coupon-market',
//         component: () => import('@/views/marketing/coupon/index'),
//         meta: { title: '优惠券管理' },
//         children: [
//           {
//             path: 'coupon-shared',
//             name: 'CouponShared',
//             component: () =>
//               import('@/views/marketing/coupon/coupon-shared/index.vue'),
//             meta: { title: '券共享池', keepAlive: true }
//           }
//         ]
//       }
//     ]
//   }
// ]
