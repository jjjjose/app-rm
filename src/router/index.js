import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/layout/MainLayout'),
    children: [
      {
        path: '',
        component: () => import('@/views/Index')
      }
    ]
  },
  {
    path: '*',
    component: () => import('@/views/Error404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
