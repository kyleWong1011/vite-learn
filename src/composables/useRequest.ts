import {
  isRef,
  toRefs,
  Ref,
  reactive,
  onMounted,
  ComputedRef,
  computed
} from 'vue'
import axios, { Method } from 'axios'

// interface ReactiveData {
//   text?: string
// }

interface FetchState {
  loading: boolean
  error: boolean
  data: object | null
}

interface StateData {
  loading: Ref<boolean>
  error: Ref<boolean>
  data: Ref<object>
  fetchData: Function
  hasData: ComputedRef<boolean>
}

interface OptionParams {
  url: string
  manual: boolean
  params: any
  method: Method
}

export default (options: OptionParams): StateData => {
  const { manual = false } = options

  const state = reactive<FetchState>({
    data: null,
    error: false,
    loading: false
  })

  async function fetchData() {
    // 拼接查询参数
    state.error = false
    state.loading = true
    try {
      const result = await axios.get({ url: '123' })
      state.data = result
    } catch (e) {
      state.error = true
    }
    state.loading = false
  }

  // const hasData = computed(() => state.data && !!state.data.text)
  const hasData = computed(() => !!state.data)

  onMounted(() => {
    // 第一次是否需要手动调用
    !manual && fetchData()
  })

  return {
    fetchData,
    hasData,
    ...toRefs(state)
  }
}
