import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    meta: { name: '登录' },
    component: Login
  },
  {
    path: '/',
    redirect: '/dashboard',
    component: () => import('@/components/layout/index.vue'),
    children: [
      {
        path: '/dashboard',
        meta: { name: '首页', icon: 'dashbord', role: 'dashboard', noHasBreadcrumb: true },
        component: () => import('@/views/dashboard.vue'),
      },
      {
        path: '/user',
        meta: { name: '用户管理', icon: 'yonghu', role: 'user' },
        component: () => import('@/views/user.vue'),
      },
      {
        path: '*',
        meta: { name: '404', icon: 'icon_404' },
        component: () => import('@/components/error-page/404.vue')
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
