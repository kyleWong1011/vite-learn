<template>
  <function-comp class="mb20" title="这个是h1111222" />
  <function-comp1 class="mb20" title="这个是div" />
  <function-comp2 class="mb20" title="这个是span" />
</template>

<script lang="ts">
import { default as FunctionComp, FunctionComp1, FunctionComp2 } from './components/FunctionalComp'

import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'FunctionalComp',
  data() {
    return {}
  },
  components: {
    FunctionComp,
    FunctionComp1,
    FunctionComp2
  }
}
</script>
<style lang="stylus" scoped>
.mb20
  margin-bottom 20px
</style>
