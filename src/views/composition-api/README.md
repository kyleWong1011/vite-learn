```js
// vue的核心功能
import {
  getCurrentInstance,
  warn as warn$1,
  inject,
  onUnmounted,
  onDeactivated,
  onActivated,
  computed,
  unref,
  efineComponent,
  reactive,
  h,
  provide,
  ref,
  watch,
  shallowRef,
  nextTick
} from 'vue'
```

```js
// vue-router的核心api功能
const router = {
  currentRoute,
  addRoute,
  removeRoute,
  hasRoute,
  getRoutes,
  resolve,
  options,
  push,
  replace,
  go,
  back: () => go(-1),
  forward: () => go(1),
  beforeEach: beforeGuards.add,
  beforeResolve: beforeResolveGuards.add,
  afterEach: afterGuards.add,
  onError: errorHandlers.add,
  isReady,
  install(app) {
    // ...
  }
}
return router

// vue-router默认导出功能
export {
  NavigationFailureType,
  RouterLink,
  RouterView,
  START_LOCATION_NORMALIZED as START_LOCATION,
  createMemoryHistory,
  createRouter,
  createRouterMatcher,
  createWebHashHistory,
  createWebHistory,
  isNavigationFailure,
  onBeforeRouteLeave,
  onBeforeRouteUpdate,
  parseQuery,
  stringifyQuery,
  useLink,
  useRoute,
  useRouter
}
```

```js
// vuex的核心api功能
export {
  Store,
  createLogger,
  createNamespacedHelpers,
  createStore,
  mapActions,
  mapGetters,
  mapMutations,
  mapState,
  useStore
}
```
