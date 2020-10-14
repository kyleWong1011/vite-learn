import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/composition-api',
    name: 'compositionApi',
    component: () =>
      import(
        /* webpackChunkName: "composition-api" */ '../views/composition-api/index.vue'
      )
  },
  {
    path: '/hooks',
    name: 'hooks',
    component: () =>
      import(
        /* webpackChunkName: "composition-api" */ '../views/hooks/index.vue'
      )
  },
  {
    path: '/data_store',
    name: 'store',
    component: () =>
      import(
        /* webpackChunkName: "data-store" */ '../views/data-store/index.vue'
      )
  },
  {
    path: '/functional-component',
    name: 'funcComp',
    component: () =>
      import(
        /* webpackChunkName: "functional-component" */ '../views/functional-component/index.vue'
      )
  },
  {
    path: '/slot-api',
    name: 'slot',
    component: () =>
      import(/* webpackChunkName: "slot-api" */ '../views/slot-api/index.vue')
  },
  {
    path: '/todo-list',
    name: 'todoList',
    component: () =>
      import(/* webpackChunkName: "todo-list" */ '../views/todo-list/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
