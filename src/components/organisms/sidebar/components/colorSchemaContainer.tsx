import { useTranslation } from 'react-i18next'
import ColorSchema from './colorSchema'
import classes from './styles.module.scss'
import { HiddenBox, Centring } from '.'
import { useUIStore } from '@/stores'
import { Typography } from '@/components/atoms/typography'
import { ThemeMode, isDarkMode } from '@/theme'

export function ColorSchemaContainer() {
  const { theme, setTheme } = useUIStore()
  const { t } = useTranslation('sidebar')

  const isDark = isDarkMode(theme)

  function setBondiTheme() {
    if (isDark) setTheme(ThemeMode.BONDI_DARK)
    else setTheme(ThemeMode.BONDI_LIGHT)
  }
  function setRoyalTheme() {
    if (isDark) setTheme(ThemeMode.ROYAL_DARK)
    else setTheme(ThemeMode.ROYAL_LIGHT)
  }
  function setGoldTheme() {
    if (isDark) setTheme(ThemeMode.GOLD_DARK)
    else setTheme(ThemeMode.GOLD_LIGHT)
  }
  return (
    <Centring className={classes.row}>
      <HiddenBox>
        <Typography fontSize='sm'>{t('common.colorSchema')}</Typography>
      </HiddenBox>
      <div className={classes.colorSchemaContainer}>
        <ColorSchema
          onClick={setBondiTheme}
          color='bondi'
          isSelected={
            theme === ThemeMode.BONDI_DARK || theme === ThemeMode.BONDI_LIGHT
          }
        />
        <ColorSchema
          onClick={setRoyalTheme}
          color='royal'
          isSelected={
            theme === ThemeMode.ROYAL_DARK || theme === ThemeMode.ROYAL_LIGHT
          }
        />
        <ColorSchema
          onClick={setGoldTheme}
          color='gold'
          isSelected={
            theme === ThemeMode.GOLD_DARK || theme === ThemeMode.GOLD_LIGHT
          }
        />
      </div>
    </Centring>
  )
}
