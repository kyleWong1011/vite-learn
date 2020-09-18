import { h } from 'vue'

interface Props {
  title: string
}

interface Hint {
  h
}

export function FunctionComp1(props: Props) {
  return h('div', `div! ${props.title}`)
}

export function FunctionComp2(props: Props) {
  return h('span', `span,${props.title}`)
}

export default function (props: Props) {
  return h(
    'h1',
    {
      class: 'font-red'
    },
    `h1,${props.title}`
  )
}
