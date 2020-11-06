import { I_State, I_Todo } from '../../../typings'
import { SET_TODO, SET_TODO_LIST } from './actionTypes'

export default {
  [SET_TODO](state: I_State, todo: I_Todo): void {
    state.list.unshift(todo)
    console.log(state.list)
  },
  [SET_TODO_LIST](state: I_State, todoList: I_Todo[]): void {
    state.list = todoList
  }
}
