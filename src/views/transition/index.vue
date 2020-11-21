<template>
  <transition-group name="list" tag="ul">
    <!--!!! 这里的:key如果是使用的index, 动画效果会出现问题 -->
    <li :class="$style.item" v-for="item in list" :key="item">
      <span>{{ item }}</span>
      <button @click="remove(item)">remove</button>
    </li>
  </transition-group>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      list: ['a', 'b', 'c', 'd']
    }
  },
  methods: {
    remove(item) {
      this.list.splice(this.list.indexOf(item), 1)
    }
  }
}
</script>

<style lang="stylus" scoped>
.list-enter-active, .list-leave-active
  transition all 0.3s
.list-enter-from, .list-leave-to
  height 0
</style>
<style lang="stylus" module>
.item
  display flex
  align-items center
  height 40px
  overflow hidden
  border-bottom 1px solid #eee
</style>
