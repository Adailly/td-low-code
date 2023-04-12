import { DashboardIcon, CodeIcon } from 'tdesign-icons-vue-next';
import { shallowRef } from 'vue';

import Layout from '@/layouts/index.vue';

export default [
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/base',
    name: 'dashboard',
    meta: {
      title: '仪表盘',
      icon: shallowRef(DashboardIcon),
      orderNo: 0,
    },
    children: [
      {
        path: 'base',
        name: 'DashboardBase',
        component: () => import('@/pages/dashboard/base/index.vue'),
        meta: {
          title: '概览仪表盘',
        },
      },
      {
        path: 'detail',
        name: 'DashboardDetail',
        component: () => import('@/pages/dashboard/detail/index.vue'),
        meta: {
          title: '统计报表',
        },
      },
    ],
  },
  {
    path: '/code',
    component: Layout,
    redirect: '/code/index',
    name: 'Code',
    meta: {
      title: 'Code',
      icon: shallowRef(CodeIcon),
      orderNo: 1,
    },
    children: [
      {
        path: 'index',
        name: 'CodeIndex',
        component: () => import('@/pages/code/index.vue'),
        meta: {
          title: '操作页',
        },
      },
    ],
  },
];
