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
        name: 'index',
        redirect: 'page/1'
      },
      {
        path: '/page/:id',
        name: 'page',
        component: () => import('@/views/Index')
      },
      {
        path: '/character/:id',
        name: 'character',
        component: () => import('@/views/Character')
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
