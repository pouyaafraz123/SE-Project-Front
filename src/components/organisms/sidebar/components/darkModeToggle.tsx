import clsx from 'clsx'
import { useSidebarStore } from '..'
import classes from './styles.module.scss'
import { Icon } from '@/components/atoms/icons'
import { Box } from '@/components/atoms/box'
import { useUIStore } from '@/stores'
import { ThemeMode, isDarkMode } from '@/theme'

export function DarkModeToggle() {
  const { setTheme, theme } = useUIStore()
  const { isOpen } = useSidebarStore()
  const isDark = isDarkMode(theme)

  function setDarkTheme() {
    switch (theme) {
      case ThemeMode.BONDI_LIGHT:
        setTheme(ThemeMode.BONDI_DARK)
        break
      case ThemeMode.ROYAL_LIGHT:
        setTheme(ThemeMode.ROYAL_DARK)
        break
      case ThemeMode.GOLD_LIGHT:
        setTheme(ThemeMode.GOLD_DARK)
        break
      default:
        break
    }
  }
  function setLightTheme() {
    switch (theme) {
      case ThemeMode.BONDI_DARK:
        setTheme(ThemeMode.BONDI_LIGHT)
        break
      case ThemeMode.ROYAL_DARK:
        setTheme(ThemeMode.ROYAL_LIGHT)
        break
      case ThemeMode.GOLD_DARK:
        setTheme(ThemeMode.GOLD_LIGHT)
        break
      default:
        break
    }
  }

  return (
    <Box
      px='xs'
      py='xs'
      radius='sm'
      className={clsx(['gap-xs', isOpen ? 'd-flex' : 'd-flex-column'])}
    >
      <div
        className={clsx([classes.icon, !isDark && classes.selectedMode])}
        onClick={setLightTheme}
      >
        <Icon name='sun' />
      </div>
      <div
        className={clsx([classes.icon, isDark && classes.selectedMode])}
        onClick={setDarkTheme}
      >
        <Icon name='moon-stars' />
      </div>
    </Box>
  )
}
