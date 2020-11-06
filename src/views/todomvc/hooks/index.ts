import { Store, useStore } from 'vuex'
import {
  SET_TODO,
  SET_TODO_LIST
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

  function setTodo(value: string): void {
    const todo: I_Todo = {
      id: new Date().getTime(),
      content: value,
      status: TODO_STATUS.WILLDO
    }
    store.dispatch(SET_TODO, todo)
    setLocalList(store.state.todomvc.list)
  }

  function setTodoList(): void {
    store.dispatch(SET_TODO_LIST, todoList)
  }

  function removeTodo(id: number): void {
    console.log('removeTodo', id)
  }

  function setStatus(id: number): void {
    console.log('setStatus', id)
  }

  function setDoing(id: number): void {
    console.log('setDoing', id)
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
