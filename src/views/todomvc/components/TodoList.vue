<template>
  <div>
    <todo-item
      v-for="item of todoList"
      :key="item.id"
      :item="item"
      @remove-todo="removeTodo"
      @set-status="setStatus"
      @set-doing="setDoing"
    />
  </div>
</template>

<script lang="ts">
import TodoItem from './TodoItem.vue'
import { defineComponent, PropType } from 'vue'
import { I_Todo } from '../../../typings'
import { useTodo } from '../hooks'

export default defineComponent({
  name: 'TodoList',
  props: {
    // 断言
    todoList: Array as PropType<I_Todo[]>
  },
  components: {
    TodoItem
  },
  setup(props, { emit, attrs }) {
    const { setStatus, setDoing, removeTodo } = useTodo()
    return {
      removeTodo,
      setStatus,
      setDoing
    }
  }
})
</script>

<style scoped lang="stylus"></style>
