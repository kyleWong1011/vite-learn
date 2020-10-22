<template>
  <div>
    <button @click="onClick">发送</button>
  </div>
</template>

<script>
import CreateWebSocket from '../../utils/webSoket'

export default {
  name: '',
  setup() {
    function someFn(data) {
      console.log('接收服务器消息的回调：', data)
    }
    const wsValue = new CreateWebSocket(
      'wss://echo.websocket.org',
      someFn,
      'wsName'
    ) // 阮一峰老师教程链接
    wsValue.connect('立即与服务器通信') // 连接服务器

    function onClick() {
      wsValue.sendHandle('我发送的消息消息')
    }

    return {
      onClick
    }
  }
}
</script>

<style scoped lang="stylus"></style>
