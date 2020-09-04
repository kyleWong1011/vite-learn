<template>
  <router-link to="/">首页</router-link>
  <router-link to="/user">用户中心</router-link>

  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>
