<template>
  <div :class="$style.root">
    <div :class="$style.main">
      <a-input-search
        v-model:value="state.value"
        placeholder="input search text"
        @search="onSubmit"
        @change="onChange"
      >
        <template v-slot:enterButton>
          <a-button> 提交 </a-button>
        </template>
      </a-input-search>
      <a-button :class="$style.btn" @click="onFilter"> 过滤 </a-button>
      <a-button :class="$style.btn" @click="onReset"> 重置 </a-button>
    </div>
    <transition-group
      v-if="state.list.length > 0"
      :class="$style.listWrapper"
      name="list"
      tag="ul"
    >
      <li
        v-for="(item, index) in state.list"
        :key="item.id"
        :style="{ color: '#' + item.id }"
        :class="$style.item"
      >
        <span style="margin-right: 15px">
          {{ index }}
        </span>
        <p :class="$style.text" @click="onTest">
          {{ item.name }}
        </p>
        <a-button type="danger" :class="$style.btn" @click="onRemove(index)">
          remove
        </a-button>
      </li>
    </transition-group>

    <a-empty v-else />
  </div>
</template>

<script lang="ts">
import { reactive, getCurrentInstance } from 'vue'
import { message as $message } from 'ant-design-vue'

function randomHexColorCode() {
  return (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6)
}

interface Item {
  id: string
  name: string
}

interface State {
  value: string
  list: Item[]
  originList: Item[]
}

export default {
  name: 'TodoList',
  setup(props, ctx) {
    const state: State = reactive({
      value: '',
      list: [],
      originList: []
    })

    const instance = getCurrentInstance()
    console.log({ instance })

    function onSubmit(): any {
      if (state.value === '') return $message.error('不得为空')
      if (state.list.some(k => k.name === state.value))
        return $message.error('不得重复')

      state.list.push({
        id: randomHexColorCode(),
        name: state.value
      })
      state.originList = state.list.slice()
      state.value = ''
    }

    function onRemove(index: number) {
      state.list.splice(index, 1)
    }

    function onFilter(): any {
      if (state.value === '') return $message.error('输入项不得为空')
      state.list = state.originList.filter(item =>
        item.name.includes(state.value)
      )
    }

    function onChange() {
      if (state.value === '' && state.originList.length > 0) {
        state.list = state.originList.slice()
      }
    }

    function onReset() {
      state.value.length > 0 && (state.value = '')
      if (state.originList.length > 0) {
        state.list = state.originList.slice()
      }
    }

    return {
      state,
      onChange,
      onFilter,
      onRemove,
      onReset,
      onSubmit
    }
  }
}
</script>
<style lang="stylus" module>
.root
  padding 15px
.main
  display flex
  .btn
    margin-left 10px
.listWrapper
  line-height 2
  .item
    display flex
    width 100%
    border-bottom 1px solid #d7d7d7
    padding 5px 0
    .text
      flex 1
</style>
<style lang="stylus" scoped>
.list-enter-active, .list-leave-active
  transition all 0.3s
.list-enter-from, .list-leave-to
  height 0
</style>
