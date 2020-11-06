<template>
  <div>
    <a-input-search
      v-model:value.trim="todoValue"
      placeholder="input search text"
      @keyup="setTodoValue"
      @search="setTodoValue(true)"
    >
      <template v-slot:enterButton>
        <a-button> 提交 </a-button>
      </template>
    </a-input-search>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { I_UseTodo, useTodo } from '../hooks'

export default defineComponent({
  name: 'TodoInput',
  setup() {
    const todoValue = ref<string>('')
    const { setTodo }: I_UseTodo = useTodo()

    const setTodoValue = (e: KeyboardEvent | Boolean): void => {
      // 断言多个条件
      if (
        ((<KeyboardEvent>e).keyCode === 13 && todoValue.value.trim().length) ||
        <Boolean>e === true
      ) {
        setTodo(todoValue.value)
        todoValue.value = ''
      }
    }

    return {
      todoValue,
      setTodoValue
    }
  }
})
</script>

<style scoped lang="stylus"></style>
