import { generatePath as routerGenPath } from 'react-router-dom'
import { ExtractParams } from './types'

export function generatePath<T extends string>(
  path: T,
  params?: ExtractParams<T>,
  search?: string | string[][] | Record<string, string> | URLSearchParams
) {
  return generate(path, params, search)
}

function generate<T>(
  path: T,
  params?: ExtractParams<T>,
  search?: string | string[][] | Record<string, string> | URLSearchParams
) {
  const searchParams = '?' + new URLSearchParams(search).toString()
  const _params = !params ? {} : params

  let url = routerGenPath(`${path}`, _params)
  url += search ? searchParams : ''
  return url
}
