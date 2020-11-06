<template>
  <todo-input />
  <todo-list :todo-list="todoList" />
</template>

<script lang="ts">
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

import { useTodo, I_UseTodo } from './hooks'

import { computed, defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
// import { createNamespacedHelpers } from 'vuex'
// const { mapState } = createNamespacedHelpers('todomvc')

export default defineComponent({
  name: 'TodoMvc',
  components: {
    TodoInput,
    TodoList
  },
  setup() {
    const {
      setTodoList,
      removeTodo,
      setStatus,
      setDoing
    }: I_UseTodo = useTodo()

    const store = useStore()

    onMounted(() => {
      setTodoList()
    })

    return {
      todoList: computed(() => store.state.todomvc.list),
      removeTodo,
      setStatus,
      setDoing
    }
  }
})
</script>
