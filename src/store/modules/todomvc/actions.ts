import { SET_TODO, SET_TODO_LIST } from './actionTypes'
import { Commit } from 'vuex'
import { I_Todo, I_State } from '../../../typings'

interface I_Ctx {
  commit: Commit
  state: I_State
}

export default {
  [SET_TODO]({ commit }: I_Ctx, todo: I_Todo): void {
    commit(SET_TODO, todo)
  },
  [SET_TODO_LIST]({ commit }: I_Ctx, todoList: I_Todo[]): void {
    commit(SET_TODO_LIST, todoList)
  }
}
