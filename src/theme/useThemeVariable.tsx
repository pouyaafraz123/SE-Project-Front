import { useMemo, useState } from 'react'
// import { useTheme } from '@/theme/useTheme.tsx'
import { useUIStore } from '@stores'
import { ThemeMode } from '.'

export function isDarkMode(theme: ThemeMode): boolean {
  const splittedTheme = theme.split('-')
  if (splittedTheme[1].toUpperCase() === 'LIGHT') return false
  return true
}

/**
 *
 * custom hook that compute given css variable color value
 *
 * @param name
 * css variable name which is defined in theme.scss file, or you can use colors from color.scss
 */
export const useThemeVariable = (name: string) => {
  const [color, setColor] = useState(getColor(name))

  // const { theme } = useTheme()
  const theme = useUIStore((state) => state.theme)

  useMemo(() => {
    setTimeout(() => {
      setColor(getColor(name))
    }, 100)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme])

  const hexColor = useMemo(() => {
    return rgbStringToHexColor(color)
  }, [color])

  return { color: hexColor }
}

/**
 * function that gets css variables value from root element
 *
 * @param name
 * css variable name which is defined in theme.scss file, or you can use colors from color.scss
 */
const getColor = (name: string) => {
  const icon = document.getElementById('root')

  if (icon) {
    console.log(getComputedStyle(icon).getPropertyValue(`${name}`))

    return getComputedStyle(icon).getPropertyValue(`${name}`)
  } else {
    return getComputedStyle(document.documentElement).getPropertyValue(
      `${name}`
    )
  }
}

export function rgbStringToHexColor(rgbString: string): string {
  // Split the input string into an array of individual values
  const rgbArray = rgbString.split(',').map((value) => value.trim())

  // Ensure there are exactly three values
  if (rgbArray.length !== 3) {
    return rgbString
  }

  // Parse the values as numbers
  const red = parseInt(rgbArray[0], 10)
  const green = parseInt(rgbArray[1], 10)
  const blue = parseInt(rgbArray[2], 10)

  // Ensure the parsed values are within the valid range (0-255)
  if (
    isNaN(red) ||
    isNaN(green) ||
    isNaN(blue) ||
    red < 0 ||
    red > 255 ||
    green < 0 ||
    green > 255 ||
    blue < 0 ||
    blue > 255
  ) {
    return ''
  }

  // Convert each component to a two-digit hexadecimal string
  const rHex = red.toString(16).padStart(2, '0')
  const gHex = green.toString(16).padStart(2, '0')
  const bHex = blue.toString(16).padStart(2, '0')

  // Combine the hexadecimal values and return the color string
  return `#${rHex}${gHex}${bHex}`
}
