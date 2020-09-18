interface State {
  value: string
  originList: any[]
  list: any[]
}

export const defineState: State = {
  value: '',
  originList: [],
  list: []
}

export function randomHexColorCode() {
  const n = (Math.random() * 0xfffff * 1000000).toString(16)
  return '#' + n.slice(0, 6)
}

export function onSubmit(state) {
  if (state.value === '') return alert('输入项不得为空')
  state.list.push({
    id: randomHexColorCode(),
    name: state.value
  })
  state.value = ''
  state.originList
}

export function onRemove(state, index) {
  state.list.splice(index, 1)
}

export function onGraden(state, index) {
  state.list.splice(index, 1)
}

export function onSerch(state) {
  // state.list.splice(index, 1)
  console.log({ state })
}
