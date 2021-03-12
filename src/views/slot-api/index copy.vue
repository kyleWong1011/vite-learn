<template>
  <div>slot</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

console.log({ defineComponent })

export default defineComponent({
  name: 'SlotApi',
  components: {},
  setup() {
  }
})

// export default {
//   name: 'SlotApi',
//   components: {}
// }
</script>
<style lang="stylus" module></style>
