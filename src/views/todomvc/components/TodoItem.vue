<template>
  <div>
    <input
      type="checkbox"
      :checked="item.status === FINISHED"
      @click="setStatus(item.id)"
    />
    <span :class="item.status === FINISHED && $style.active">{{
      item.content
    }}</span>

    <button @click="removeTodo">删除</button>
    <button
      v-if="item.status !== FINISHED"
      :class="item.status"
      @click="setDoing(item.id)"
    >
      {{ item.status === DOING ? '正在做...' : '马上做' }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { I_Todo, TODO_STATUS } from '../../../typings'

interface I_StatusState {
  DOING: TODO_STATUS.DOING
  WILLDO: TODO_STATUS.WILLDO
  FINISHED: TODO_STATUS.FINISHED
}

export default defineComponent({
  name: 'TodoItem',
  props: {
    item: Object as PropType<I_Todo>
  },
  setup(props, { emit }) {
    //Todo! 此处是静态的，没必要使用响应式
    //TODO 以下两种写法均可

    // const statusState: I_StatusState = {
    //   DOING: TODO_STATUS.DOING,
    //   WILLDO: TODO_STATUS.WILLDO,
    //   FINISHED: TODO_STATUS.FINISHED
    // }

    const statusState = <I_StatusState>{
      DOING: TODO_STATUS.DOING,
      WILLDO: TODO_STATUS.WILLDO,
      FINISHED: TODO_STATUS.FINISHED
    }
    const removeTodo = (id: number): void => {
      emit('remove-todo', id)
    }

    const setStatus = (id: number): void => {
      emit('set-status', id)
    }

    const setDoing = (id: number): void => {
      emit('set-doing', id)
    }

    return {
      removeTodo,
      setStatus,
      setDoing,
      ...statusState
    }
  }
})
</script>

<style module lang="stylus">
.active
 color red
.willdo
 background-color #cdcdcd
 color red
.doing
 background-color #cdcdcd
 color orange
.finished
 background-color #cdcdcd
 color green
</style>
