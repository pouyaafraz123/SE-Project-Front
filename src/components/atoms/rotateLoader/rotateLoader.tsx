import { RotatingLines } from 'react-loader-spinner'
import { IRotateLoaderProps } from '@/components/atoms/rotateLoader'
import { useThemeVariable } from '@/theme/useThemeVariable.tsx'

/**
 * A rotating loader component using the react-loader-spinner library.
 *
 * @param {IRotateLoaderProps} props - The props for the RotateLoader component.
 * @param {string} [props.color] - The color of the loader (e.g., CSS color value).
 * @param {string} [props.width] - The width of the loader (e.g., CSS width value).
 * @returns RotateLoader The rendered RotateLoader component.
 */
export function RotateLoader({ color, width }: IRotateLoaderProps) {
  const themeColor = useThemeVariable(`--theme-${color}`)

  return (
    // Render the RotatingLines component from react-loader-spinner with animation properties.
    <RotatingLines
      animationDuration={'500ms'} // Animation duration in milliseconds.
      width={width || '20'} // Default width is 20 if not provided.
      strokeColor={'#000'} // Color of the rotating lines.
    />
  )
}
