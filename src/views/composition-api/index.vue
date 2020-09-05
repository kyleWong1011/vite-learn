<template>
  <div :class="$style.root">
    {{ state.count }}
    {{ double }}
  </div>

  <a-button-group>
    <a-button type="primary" @click="add"> 加1加</a-button>
    <a-button type="primary" @click="minus"> 减1减</a-button>
  </a-button-group>
</template>

<script lang="ts">
import { reactive, computed } from 'vue'
export default {
  props: {
    data: {
      type: [Array],
      default: () => []
    }
  },
  setup(props) {
    const state = reactive({
      count: 1
    })

    const double = computed(() => state.count * 2)

    function add() {
      state.count++
    }
    function minus(num: number) {
      state.count--
    }

    return {
      state,
      add,
      minus,
      double
    }
  }
}
</script>
<style lang="stylus" module>
.root
  background #999
</style>
