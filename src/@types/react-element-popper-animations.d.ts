// TODO INCOMPLETE TYPE DECLARATION
// BUT IT IS OK BECAUSE WE DONT USE IT

declare module 'react-element-popper/animations/transition' {
  const transition: ({ from = 12, duration = 400 } = {}) => () => void
  export default transition
}

declare module 'react-element-popper/animations/opacity' {
  const opacity: ({ from = 0, to = 1, duration = 400 } = {}) => () => void
  export default opacity
}
