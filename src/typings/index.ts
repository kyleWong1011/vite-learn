export interface I_Todo {
  id: number
  content: string
  status: TODO_STATUS
}

export interface I_State {
  list: I_Todo[]
}

export enum TODO_STATUS {
  WILLDO = 'willdo',
  DOING = 'doing',
  FINISHED = 'finished'
}
