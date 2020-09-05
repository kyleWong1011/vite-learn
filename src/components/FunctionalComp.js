import { h } from 'vue'

// export default
export const FunctionComp1 = (props) => {
  return h('div', `Hello! ${props.title}`)
}

export const FunctionComp2 = (props) => {
  return h('span', `span,${props.title}`)
}

export default (props) => {
  return h('h1', `h1,${props.title}`)
}
