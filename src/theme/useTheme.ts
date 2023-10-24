import { useUIStore } from '@stores'
import { ThemeMode } from '@/theme/types.ts'

const applyThemeMode = (value: ThemeMode) => {
  const html = document.getElementById('html')!
  const body = document.getElementById('body')!
  const root = document.getElementById('root')!

  html.setAttribute('data-theme', value)
  body.setAttribute('data-theme', value)
  root.setAttribute('data-theme', value)
}
applyThemeMode(useUIStore.getState().theme) // sets theme on page load
useUIStore.subscribe((state) => state.theme, applyThemeMode) // listens for further changes
