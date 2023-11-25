import { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import { sidebarFn } from '..'
import { TPath } from '../types'

export function LinkProducer(props: PropsWithChildren<Partial<TPath>>) {
  const { path, children } = props

  function clickHandler() {
    sidebarFn.setSelectedParentName('')
  }
  if (path) {
    return (
      <Link to={path} style={{ color: 'inherit' }} onClick={clickHandler}>
        {children}
      </Link>
    )
  } else {
    return <>{children}</>
  }
}
