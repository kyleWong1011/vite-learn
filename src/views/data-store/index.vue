<template>
  <a-alert :message="message" banner type="success" closable />
  <div :class="$style.root">home，{{ year }}</div>

  <ul :class="$style.list">
    <quick-sort :data="[5, 6, 7, 8, 4, 1, 3, 9, 0, 2]" />
  </ul>

  <a-button-group>
    <a-button type="primary" @click="onClickA"> 加1加</a-button>
    <a-button type="primary" @click="onClickB"> 减1减 </a-button>
  </a-button-group>
</template>

<script lang="ts">
import QuickSort from '../../components/QuickSort.vue'

import { mapState, mapMutations, mapActions } from 'vuex'

function normalizeNamespace(fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace
      namespace = ''
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/'
    }
    console.log({ namespace, map })
    return fn(namespace, map)
  }
}

export default {
  name: '',
  components: {
    QuickSort
  },
  computed: {
    ...mapState(['year']),
    message() {
      return `hello, ${this.year}`
    }
  },
  methods: {
    ...mapMutations(['SET_YEAR']),
    ...mapActions(['onSetYear']),
    onClickA() {
      this.SET_YEAR(1)
    },
    onClickB() {
      this.onSetYear(-1)
    }
  }
}
</script>
<style lang="stylus" module>
.root
  background #f4f4f4
.list
  display flex
</style>
