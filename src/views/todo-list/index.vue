<template>
  <div :class="$style.root">
    <div :class="$style.main">
      <a-input-search
        v-model:value="state.value"
        placeholder="input search text"
        @search="onSubmit"
        @change="onChange"
        @clear="onClear"
      >
        <template v-slot:enterButton>
          <a-button> 提交 </a-button>
        </template>
      </a-input-search>
      <a-button :class="$style.btn" @click="onFilter"> 过滤 </a-button>
      <a-button :class="$style.btn" @click="onReset"> 重置 </a-button>
    </div>
    <ul :class="$style.listWrapper">
      <li
        v-for="(item, index) in state.list"
        :key="item.id"
        :class="$style.item"
      >
        <span style="margin-right: 15px">{{ index }}</span>
        <p :class="$style.text" @click="onTest">
          {{ item.name }}
        </p>
        <a-button type="danger" :class="$style.btn" @click="onRemove(index)">
          remove
        </a-button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { reactive, computed } from 'vue'

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
  setup() {
    const state: State = reactive({
      value: '',
      list: [],
      originList: []
    })

    function onSubmit() {
      if (state.value === '') return alert('输入项不得为空')
      if (state.originList.some(item => item.name === state.value))
        return alert('不得重复')

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

    function onFilter() {
      if (state.value === '') return alert('输入项不得为空')
      state.list = state.originList.filter(item =>
        item.name.includes(state.value)
      )
    }

    function onChange(ev) {
      if (state.value === '' && state.originList.length > 0) {
        state.list = state.originList.slice()
      }
    }

    function onReset() {
      state.value = ''
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
