<template>
  <div>
    <button @click="onSend">发送</button>
    <button @click="onClose">关闭</button>
  </div>
</template>

<script lang="ts">
import CreateWebSocket from '../../utils/webSoket'

export default {
  name: '',
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

    const a = Object.create(null)
    const b = Object.create(Object.prototype)
    const c = Object.create({})
    const d = {}
    const e = new Object(null)
    const f = new Object()
    const g = new Object({})
    const h = new Object(Object.prototype)

    console.log({ a, b, c, d, e, f, g, h })

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

    function someFn(data: any) {
      console.log('接收服务器消息的回调：', data)
    }
    const wsValue = new CreateWebSocket(
      'wss://echo.websocket.org',
      someFn,
      'wsName'
    ) // 阮一峰老师教程链接
    wsValue.connect('立即与服务器通信') // 连接服务器

    function onSend() {
      wsValue.sendHandle('我发送的消息消息')
    }

    function onClose() {
      wsValue.closeMyself()
    }

    return {
      onSend,
      onClose
    }
  }
}
</script>

<style scoped lang="stylus"></style>
