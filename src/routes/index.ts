import {
  RouteRecordRaw,
  RouterHistory,
  createRouter,
  createWebHistory
} from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/composition-api'
  },
  {
    path: '/composition-api',
    name: 'compositionApi',
    component: () => import('@/views/composition-api/index.vue')
  },
  {
    path: '/hooks',
    name: 'hooks',
    component: () => import('@/views/hooks/index.vue')
  },
  {
    path: '/data_store',
    name: 'store',
    component: () => import('@/views/data-store/index.vue')
  },
  {
    path: '/functional-component',
    name: 'funcComp',
    component: () => import('@/views/functional-component/index.vue')
  },
  {
    path: '/transition',
    name: 'transition',
    component: () => import('@/views/transition/index.vue')
  },
  {
    path: '/slot-api',
    name: 'slot',
    component: () => import('../views/slot-api/index')
  },
  {
    path: '/todomvc',
    name: 'todomvc',
    component: () => import('@/views/todomvc/index.vue')
  },
  {
    path: '/request',
    name: 'request',
    component: () => import('@/views/request/index.vue')
  },
  {
    path: '/temp',
    name: 'temp',
    component: () => import('@/views/temp/index.vue')
  }
]

const routerHistory: RouterHistory = createWebHistory()

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: routerHistory,
  routes
})

export default router
