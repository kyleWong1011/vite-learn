<template>
  <div>
    <a-skeleton v-if="loading" />
    <div v-if="error"> An Error occured, please try again</div>
    <div v-if="hasData"> {{ data }} </div>
  </div>
</template>

<script lang="ts">
import useFetchData from '../../composables/use-fetch-data'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const { loading, error, data, fetchData, hasData } = useFetchData()
    return {
      loading,
      error,
      data,
      fetchData,
      hasData
    }
  },
  mounted() {
    this.fetchData()
  }
})
</script>
