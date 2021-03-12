<template>

  <div ref="wrapper"
       class="wrapper">
    <div class="card">
      <h1>Title - Card 1</h1>
      <p>Medium length description. Let's add a few more words here.</p>
      <div class="visual"></div>
    </div>
    <div class="card">
      <h1>Title - Card 2</h1>
      <p>Long Description. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed est error repellat veritatis.</p>
      <div class="visual"></div>
    </div>
    <div class="card">
      <h1>Title - Card 3</h1>
      <p>Short Description.</p>
      <div class="visual"></div>
    </div>
  </div>

</template>

<script>
import { ref, reactive } from '@vue/reactivity'
import { watchEffect, defineComponent, onMounted } from '@vue/runtime-core'

export default defineComponent({
  setup() {
    let obj = reactive({ foo: 1 })
    watchEffect(async (onInvalidate) => {
      let validate = true
      onInvalidate(() => {
        validate = false
      })
      const data = await fetch(obj.foo)
      if (validate) {
        /* 正常使用 data */
        console.log({ data })
      } else {
        /* 说明当前副作用已经无效了，抛弃即可 */
        console.log('invalidate')
      }
    })

    onMounted(() => {
      console.log(123)
    })
  }
})
</script>

<style scoped lang="stylus">
.wrapper
  display grid
  grid-gap 1rem
  grid-template-columns repeat(3, 1fr)
.visual
  height 100px
  width 100%
  background wheat
  margin 0.5rem 0
.card
  display flex
  flex-direction column
  justify-content space-between
  background lightpink
  padding 1rem
</style>
