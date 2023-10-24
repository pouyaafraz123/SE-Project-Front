import { useUIStore } from '../src/stores/index'
import { ThemeMode } from '../src/theme/types'
import { localeType } from '../src/configs'
import { dir } from 'i18next'
const applyThemeMode = (value: ThemeMode) => {
  document.body.setAttribute('data-theme', value)
}
const applyLocaleDir = (locale: localeType) => {
  document.body.setAttribute('dir', dir(locale))
  document.dir = dir(locale)
}
applyThemeMode(useUIStore.getState().theme) // sets theme on page load
applyLocaleDir(useUIStore.getState().locale)
useUIStore.subscribe((state) => state.theme, applyThemeMode) // listens for further changes
useUIStore.subscribe((state) => state.locale, applyLocaleDir) // listens for further changes
