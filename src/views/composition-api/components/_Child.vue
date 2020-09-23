<template>
  <div :class="$style.root">
    <h1>孙组件部分</h1>
    <h3>inject: {{ theme }}</h3>
    <h3>inject: {{ count }}</h3>
  </div>
</template>

<script>
import { ThemeSymbol, CountSymbol } from '../config'

import { ref, watch, watchEffect, inject, onBeforeMount, onMounted } from 'vue'

export default {
  name: 'Child',
  setup(props, ctx) {
    onBeforeMount(() => {
      console.log('grandchild before mounted!')
    })
    onMounted(() => {
      console.log('grandchild mounted!')
    })

    const theme = inject(ThemeSymbol)
    const count = inject(CountSymbol)

    watchEffect(() => {
      console.log(`inject,theme set to==>: ${theme.value}`)
      console.log(`inject,count set to==>: ${count.value}`)
    })

    return {
      theme,
      count
    }
  }
}
</script>

<style module lang="stylus">
.root
  background #e9e9e9
  padding 10px
</style>
