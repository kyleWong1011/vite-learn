import { createStore, ActionContext } from 'vuex'

export interface State {
  year: number
}

export default createStore<State>({
  state: {
    year: 1970
  },
  mutations: {
    SET_YEAR(state: State, year: number) {
      state.year += year
    }
  },
  actions: {
    onSetYear: ({ commit }, year: number) => {
      commit('SET_YEAR', year)
    }
  }
})
