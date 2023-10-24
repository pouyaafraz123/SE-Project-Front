import { colors } from './colors'

export const getColor = (name: string) => {
  return colors[name] || colors.default
}
