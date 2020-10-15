<template>
  <transition-group name="list"
                    tag="ul">
    <li class="item"
        v-for="(item,index) in list"
        :key="index">
      <span>{{item}}</span>
      <button @click="remove(item)">remove</button>
    </li>
  </transition-group>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      list: ['a', 'b', 'c', 'd']
    }
  },
  methods: {
    remove(item) {
      console.log(this.list.indexOf(item))
      this.list.splice(this.list.indexOf(item), 1)
    }
  }
}
</script>

<style lang="stylus" scoped>
.item
  display flex
  align-items center
  height 40px
  overflow hidden
  border-bottom 1px solid #eee
.list-enter-active, .list-leave-active
  transition all 0.3s
.list-enter-from, .list-leave-to
  height 0
</style>
