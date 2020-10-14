<template>
  <div :class="$style.root">
    <p>state.count: {{ state.count }}</p>
    <p>state.double: {{ double }}</p>
    <p>provide countRef: {{ countRef }}</p>
    <p>provide themeRef: {{ themeRef }}</p>
  </div>

  <a-button-group>
    <a-button type="primary" @click="add"> 加1加</a-button>
    <a-button type="primary" @click="minus"> 减1减</a-button>
  </a-button-group>

  <Child :title="title" :count="state.count" @on-click="onClick" />
</template>

<script lang="ts">
import Child from './components/Child.vue'

import { ThemeSymbol, CountSymbol } from './config'

import {
  reactive,
  computed,
  ref,
  provide,
  readonly,
  onBeforeMount,
  onMounted
} from 'vue'

export default {
  props: {
    data: {
      type: [Array],
      default: () => []
    }
  },
  components: {
    Child
  },
  setup(props, ctx) {
    const state = reactive({
      count: 0,
      timer: null
    })

    const themeRef = ref('dark')
    const countRef = ref(0)

    const double = computed(() => state.count * 2)

    function add() {
      countRef.value++
      state.count++
    }
    function minus(num: number) {
      countRef.value--
      state.count--
    }

    let title = ref('新的内容')
    const copyState = readonly(state)

    function onClick(count) {
      state.count += count
      console.log(' state.count ', state.count)
    }
    onBeforeMount(() => {
      console.log('before mounted!')
    })
    onMounted(() => {
      console.log('mounted!')
    })

    provide(ThemeSymbol, themeRef)
    provide(CountSymbol, countRef)
    setTimeout(() => {
      // TODO! 报错
      // copyState.count += 200
      themeRef.value = 'provide新值'
    }, 1000)
    clearInterval(state.timer)
    state.timer = setInterval(() => {
      countRef.value += 100
    }, 1000)

    return {
      state,
      add,
      minus,
      double,
      title,
      countRef,
      themeRef,
      onClick
    }
  }
}
</script>
<style lang="stylus" module>
.root
  background #999
</style>
