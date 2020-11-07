import { I_State, I_Todo, TODO_STATUS } from '../../../typings'
import {
  REMOVE_TODO,
  SET_DOING,
  SET_STATUS,
  SET_TODO,
  SET_TODO_LIST
} from './actionTypes'

export default {
  [SET_TODO](state: I_State, todo: I_Todo): void {
    state.list = [todo, ...state.list]
  },
  [SET_TODO_LIST](state: I_State, todoList: I_Todo[]): void {
    state.list = todoList
  },
  [REMOVE_TODO](state: I_State, id: number): void {
    state.list = state.list.filter((item: I_Todo) => item.id !== id)
  },
  [SET_STATUS](state: I_State, id: number): void {
    state.list = state.list.map((item: I_Todo) => {
      if (item.id === id) {
        switch (item.status) {
          case TODO_STATUS.FINISHED:
            item.status = TODO_STATUS.WILLDO
            break
          case TODO_STATUS.WILLDO:
          case TODO_STATUS.DOING:
            item.status = TODO_STATUS.FINISHED
            break
          default:
            break
        }
      }
      return item
    })
  },
  [SET_DOING](state: I_State, id: number): void {
    state.list = state.list.map((item: I_Todo) => {
      if (item.id === id) {
        item.status =
          item.status === TODO_STATUS.WILLDO
            ? TODO_STATUS.DOING
            : TODO_STATUS.WILLDO
      } else {
        // 将其它项都切成待办状态
        if (item.status === TODO_STATUS.DOING) {
          item.status = TODO_STATUS.WILLDO
        }
      }

      return item
    })
  }
}
