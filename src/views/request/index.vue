<template>
  <div :class="$style.root">
    <a-input-search v-model:value="query"
                    placeholder="input search text"
                    :class="$style.input"
                    @search="queryData">
      <template v-slot:enterButton>
        <a-button> 提交</a-button>
      </template>
    </a-input-search>

    <a-spin v-if="loading" />

    <a-alert v-if="error"
             type="error"
             message="加载数据失败..."
             show-icon
             banner
             closable />

    <a-empty v-if="!loading && !hasData" />

    <ul v-if="hasData"
        :class="$style.list">
      <li v-for="item of hits"
          :key="item.objectID"
          :class="$style.item">
        {{item.title || '--'}}
      </li>
    </ul>
  </div>

</template>

<script lang="ts">
import { ref, computed } from 'vue'
import axios from 'axios'
import { message as $message } from 'ant-design-vue'

export default {
  setup() {
    // const state = reactive({
    //   query: 'vue',
    //   hits: []
    // })

    const state = {
      query: ref(''),
      loading: ref(false),
      error: ref(false),
      hits: ref([])
    }

    async function queryData(query?: string) {
      if (state.query.value === '') return $message.error('请输入搜索内容')

      state.error.value = false
      state.loading.value = true
      state.hits.value = []

      try {
        const res = await axios.get(
          `https://hn.algolia.com/api/v1/search?query=${query}`
        )
        state.hits.value = res.data.hits || []
      } catch (error) {
        state.error.value = true
        console.error(error)
      } finally {
        state.loading.value = false
      }
    }

    // onMounted(() => {
    //   watchEffect(() => {
    //     queryData(state.query.value)
    //   })
    // })

    const hasData = computed(() => state.hits.value.length > 0)

    return {
      ...state,
      hasData,
      queryData
    }
  }
}
</script>

<style module lang="stylus">
.root
  display flex
  flex-direction column
  height 100%
  overflow hidden
  .input
    flex 0 0 32px
    height 32px
  .list
    background #f4f4f4
    height calc(100vh - 72px)
    overflow-x hidden
    overflow-y auto
    .item
      padding 0 20px
      border-bottom 1px solid #d7d7d7
      line-height 40px
      height 40px
      overflow hidden
</style>
