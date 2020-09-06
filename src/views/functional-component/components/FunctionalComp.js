import { h } from 'vue'

// export default
export const FunctionComp1 = (props) => {
  return h('div', `div! ${props.title}`)
}

export const FunctionComp2 = (props) => {
  return h('span', `span,${props.title}`)
}

export default (props) => {
  return h(
    'h1',
    {
      class: 'font-red'
    },
    `h1,${props.title}`
  )
}

// export default (props) => {
// return h(
//   'h1',
//   {
//     class: 'font-red'
//   },
//   `h1,${props.title}`
// )
// return <h1 className='font-red'>{props.title}</h1>
// }
