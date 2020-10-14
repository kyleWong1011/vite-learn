<template>
  <div :class="$style.root"
       class="border-bottom-1px">
    <router-link v-for="route in routes"
                 :to="route.path"
                 :key="route.name"
                 :class="$style.link">
      {{ route.name }}
    </router-link>
  </div>
  <router-view />
</template>

<script lang="ts">
import { reactive, onMounted, defineComponent } from 'vue'

import { routes } from './router'
export default defineComponent({
  name: 'App',
  setup() {
    return { routes: reactive(routes) }
  }
})
</script>
<style lang="stylus" module>
@import './style/variable'
.root
  line-height 40px
  background #222
  .link
    display inline-block
    margin-right 20px
    color #999
  :global(.router-link)
    color #000
  :global(.router-link-active)
    color #fff
    font-weight 600
</style>
