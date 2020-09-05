<template>
  <quick-sort v-if="left.length" :data="left" />
  <li :class="$style.flex1">{{ flag }}</li>
  <quick-sort v-if="right.length" :data="right" />
</template>

<script>
export default {
  name: 'QuickSort',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    let flag = props.data[0]
    let left = []
    let right = []
    props.data.splice(1).forEach((v) => {
      v > flag ? right.push(v) : left.push(v)
    })
    return {
      left,
      right,
      flag
    }
  }
}
</script>
<style module lang="stylus">
.flex1
  flex 1
</style>
