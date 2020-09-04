<template>
  <a-alert :message="message" banner type="success" closable />
  <div :class="$style.root">home，{{ year }}</div>

  <a-button-group>
    <a-button type="primary" @click="onClickA"> 加1加</a-button>
    <a-button type="primary" @click="onClickB"> 减1减 </a-button>
  </a-button-group>
</template>

<script lang="ts">
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: '',
  data() {
    return {}
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
      this.SET_YEAR(-1)
    },
    onClickB() {
      this.onSetYear(1)
    }
  }
}
</script>
<style lang="stylus" module>
.root
  background #f4f4f4
</style>
