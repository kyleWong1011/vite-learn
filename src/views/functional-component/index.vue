<template>
  <function-comp title="这个是h1" />
  <function-comp1 title="这个是div" />
  <function-comp2 title="这个是span" />
</template>

<script lang="ts">
import {
  default as FunctionComp,
  FunctionComp1,
  FunctionComp2
} from '../../components/FunctionalComp'

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
<style lang="stylus" module>
.root
  background #f4f4f4
.list
  display flex
</style>
