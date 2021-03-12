<template>

</template>

<script>
import { effect, reactive, shallowReactive } from '@vue/reactivity'
// import { } from '@vue/compiler-dom'
// import { } from '@vue/compiler-core'
// import { } from '@vue/compiler-sfc'
// import { } from '@vue/compiler-ssr'
// import { } from '@vue/runtime-core'
// import { } from '@vue/runtime-dom'
// import { } from '@vue/shared'

export default {
  setup() {
    // 使用 reactive() 函数定义响应式数据
    const obj = reactive({ text: 'hello' })

    // 使用 effect() 函数定义副作用函数
    effect(() => {
      document.body.innerText = obj.text
    })

    // 一秒后修改响应式数据，这会触发副作用函数重新执行
    setTimeout(() => {
      obj.text += ' world'
    }, 1000);
  }
}
</script>
