import { watch } from 'vue'
import { Store, useStore } from 'vuex'
import {
  SET_TODO,
  SET_TODO_LIST,
  REMOVE_TODO,
  SET_STATUS,
  SET_DOING
} from '../../../store/modules/todomvc/actionTypes'
import { I_Todo, TODO_STATUS } from '../../../typings'

export interface I_UseTodo {
  setTodo: (value: string) => void
  setTodoList: () => void
  removeTodo: (id: number) => void
  setStatus: (id: number) => void
  setDoing: (id: number) => void
}

interface I_UseLocalStorage {
  getLocalList: () => I_Todo[]
  setLocalList: (todolist: I_Todo[]) => void
}

function useTodo(): I_UseTodo {
  const store: Store<any> = useStore()
  const { getLocalList, setLocalList }: I_UseLocalStorage = useLocalStorage()

  const todoList: I_Todo[] = getLocalList()

  // 监听数组发生变化
  watch(
    () => store.state.todomvc.list,
    (todoList: I_Todo[]) => {
      // TODO 待解决
      console.log('watch==>', { todoList })
      setLocalList(todoList)
    }
  )

  function setTodo(value: string): void {
    const todo: I_Todo = {
      id: new Date().getTime(),
      content: value,
      status: TODO_STATUS.WILLDO
    }
    store.dispatch(SET_TODO, todo)
  }

  function setTodoList(): void {
    store.dispatch(SET_TODO_LIST, todoList)
  }

  function removeTodo(id: number): void {
    store.dispatch(REMOVE_TODO, id)
  }

  function setStatus(id: number): void {
    store.dispatch(SET_STATUS, id)
  }

  function setDoing(id: number): void {
    store.dispatch(SET_DOING, id)
  }

  return { setTodo, setTodoList, removeTodo, setStatus, setDoing }
}

function useLocalStorage(): I_UseLocalStorage {
  function getLocalList(): I_Todo[] {
    return JSON.parse(localStorage.getItem('todolist') || '[]')
  }

  function setLocalList(todolist: I_Todo[]): void {
    localStorage.setItem('todolist', JSON.stringify(todolist))
  }

  return {
    getLocalList,
    setLocalList
  }
}

export { useTodo }
