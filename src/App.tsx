import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { routes } from './router'
import './app.styl'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <div class="root">
          {routes.map(route => (
            <RouterLink class="link" to={route.path}>
              {/* 最好使用函数
                  [Vue warn]: Non-function value encountered for default slot.
                  Prefer function slots for better performance. */}
              {/* {route.name} */}
              {() => route.name}
            </RouterLink>
          ))}
        </div>
        <RouterView />
      </>
    )
  }
})
