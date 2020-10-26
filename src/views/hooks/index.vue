<template>
  <a-skeleton v-if="loading" />
  <div v-if="error">An Error occured, please try again</div>
  <div v-if="hasData">{{ data.text }}</div>
</template>

<script lang="ts">
import useFetchData from '../../composables/use-fetch-data'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    // p1
    // let p1 = new Promise((resolve, reject) =>
    //   setTimeout(() => {
    //     resolve(321)
    //   }, 2000)
    // )

    // setTimeout(
    //   console.log,
    //   10,
    //   p1.then(res => {
    //     console.log(res)
    //   })
    // )

    // p2
    // let p2 = Promise.resolve(123)

    // setTimeout(
    //   console.log,
    //   0,
    //   p2.then(res => {
    //     console.log({ res })
    //   })
    // )

    // p3
    // let p3 = new Promise((resolve, reject) => {
    //   setTimeout(reject, 3000)
    //   reject()
    //   // reject() // 没有效果
    // })

    // setTimeout(console.log, 0, p3)
    // setTimeout(console.log, 2000, p3)

    // const a = Object.create(null)
    // const b = Object.create(Object.prototype)
    // const c = Object.create({})
    // const d = {}
    // const e = new Object(null)
    // const f = new Object()
    // const g = new Object({})
    // const h = new Object(Object.prototype)

    // console.log({ a, b, c, d, e, f, g, h })
    const person = new Object()
    const colors: any = []
    const reg = /^\d{n}$/
    const date = new Date()
    function foo<T>(arg: T): T {
      return arg
    }

    console.log(person instanceof Object) // true
    console.log(colors instanceof Array) // true
    console.log(reg instanceof RegExp) // true
    console.log(date instanceof Date) // true
    console.log(foo instanceof Function) // true
    // 所有其它的引用类型返回都为true,
    console.log(colors instanceof Object) // true
    console.log(reg instanceof Object) // true
    console.log(date instanceof Object) // true
    console.log(foo instanceof Object) // true

    // console.log(Reflect.deleteProperty(obj, key))

    // Array.isArray
    // Array.from

    return useFetchData()
  },
  created() {
    this.fetchData()
  }
})
</script>
