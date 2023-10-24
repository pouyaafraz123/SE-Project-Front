import { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import { sidebarFn } from '..'
import { ILinkProducerProps } from './types'

export function LinkProducer(props: PropsWithChildren<ILinkProducerProps>) {
  const { items, children } = props

  function clickHandler() {
    sidebarFn.setSelectedParentName('')
  }
  if (!items.child) {
    return (
      <Link
        to={items.path || ''}
        style={{ color: 'inherit' }}
        onClick={clickHandler}
      >
        {children}
      </Link>
    )
  } else {
    return <>{children}</>
  }
}
