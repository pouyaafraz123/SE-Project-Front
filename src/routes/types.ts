import { RouteObject } from 'react-router-dom'
import { UserTypes } from '@constants'

type ExtractParam<Path, NextPart> = Path extends `:${infer Param}`
  ? Record<Param, string | number | boolean> & NextPart
  : NextPart

type ExtractFoundParams<Path> = Path extends `${infer Segment}/${infer Rest}`
  ? ExtractParam<Segment, ExtractFoundParams<Rest>>
  : ExtractParam<Path, object>

export type ExtractParams<Path> = Path extends `${infer Segment}/${infer Rest}`
  ? // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Segment extends `:${infer _Params}`
    ? ExtractParam<Segment, ExtractFoundParams<Rest>>
    : ExtractParams<Rest>
  : Path extends `:${infer Param}`
  ? Record<Param, string | number | boolean>
  : undefined

export type IExtendedRouteObject = {
  route: RouteObject
  permissions: UserTypes[]
}

export type IRouteParams<T> = Record<keyof T, string>
