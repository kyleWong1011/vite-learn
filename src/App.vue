<template>
  <div class="nav">
    <router-link v-for="route in routes"
                 :key="route.name"
                 :to="route.path"
                 class="link">
      {{ route.name}}
    </router-link>
  </div>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { routes } from './routes'

export default defineComponent({
  name: 'App',
  setup() {
    return {
      routes: routes.filter(({ name }) => !!name)
    }
  }
})
</script>

<style lang="stylus">
@import './app.styl'
</style>
