<template>
  <div :class="$style.root">
    <h1>子组件部分</h1>
    <h2>props title:{{ title || '暂无内容' }}</h2>
    <h3>props count:{{ count }}</h3>
    <h3>inject theme: {{ theme }}</h3>
    <h3>inject count:{{ count2 }}</h3>
    <a-button @click="onClick">加</a-button>
    <GrandChild />
  </div>
</template>

<script>
import GrandChild from './_Child.vue'

import { ThemeSymbol, CountSymbol } from '../config'

import { ref, watch, inject, watchEffect, onBeforeMount, onMounted } from 'vue'

export default {
  name: 'Child',
  props: {
    title: String,
    count: Number
  },
  components: {
    GrandChild
  },
  setup(props, ctx) {
    onBeforeMount(() => {
      console.log('child before mounted!')
    })
    onMounted(() => {
      console.log('child mounted!')
    })

    const theme = inject(ThemeSymbol)
    const count2 = inject(CountSymbol)

    function onClick() {
      ctx.emit('on-click', 100)
    }

    watchEffect(() => {
      console.log('child watchEffect:props.title==>', props.title)
      console.log('child watchEffect:props.count==>', props.count)
      // console.log(`inject,theme set to==>: ${theme.value}`)
    })

    watch(
      () => props.count,
      val => {
        console.log('child watch==>', { val })
      }
    )
    return {
      theme,
      count2,
      onClick
    }
  }
}
</script>

<style module lang="stylus">
.root
  background #f4f4f4
  padding 10px
</style>
