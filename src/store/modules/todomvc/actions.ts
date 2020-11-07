import {
  REMOVE_TODO,
  SET_DOING,
  SET_STATUS,
  SET_TODO,
  SET_TODO_LIST
} from './actionTypes'
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
  },
  [REMOVE_TODO]({ commit }: I_Ctx, id: number): void {
    commit(REMOVE_TODO, id)
  },
  [SET_STATUS]({ commit }: I_Ctx, id: number): void {
    commit(SET_STATUS, id)
  },
  [SET_DOING]({ commit }: I_Ctx, id: number): void {
    commit(SET_DOING, id)
  }
}
