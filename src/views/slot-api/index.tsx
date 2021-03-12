import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'SlotApi',
  components: {},
  setup() {
    return () => (<>
      <div>slot</div>
    </>)
  }
})
