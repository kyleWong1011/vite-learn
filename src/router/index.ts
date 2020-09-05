import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'CompositionApi',
    component: () =>
      import(/* webpackChunkName: "composition-api" */ '../views/composition-api/index.vue')
  },
  {
    path: '/data_store',
    name: 'Store',
    component: () => import(/* webpackChunkName: "data-store" */ '../views/data-store/index.vue')
  },
  {
    path: '/functional-component',
    name: 'FuncComp',
    component: () =>
      import(
        /* webpackChunkName: "functional-component" */ '../views/functional-component/index.vue'
      )
  },
  {
    path: '/slot-api',
    name: 'Slot',
    component: () => import(/* webpackChunkName: "slot-api" */ '../views/slot-api/index.vue')
  },
  {
    path: '/todo-list',
    name: 'TodoList',
    component: () => import(/* webpackChunkName: "todo-list" */ '../views/todo-list/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
