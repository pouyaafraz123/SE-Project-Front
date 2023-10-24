import type { Preview } from '@storybook/react'
import '@/i18n/i18n'
import '../src/styles/main.css'
import './useTheme'
import './useMock'
import { withUIStore, withRouter, withQuery, withToast } from './decorators'
import { ThemeMode } from '../src/theme'
import { withSelectBoxContainer } from './decorators/withSelectBoxContainer'

// convert ThemeTypes to storybook toolbar items
const Themes = Object.entries(ThemeMode).map(([key, value]) => {
  return { value: value, title: key }
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    withSelectBoxContainer,
    withUIStore,
    withRouter,
    withQuery,
    withToast
  ],
  globalTypes: {
    locale: {
      name: 'Locale',
      description: 'Locale',
      defaultValue: 'fa',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', right: '🇺🇸', title: 'English' },
          { value: 'fa', right: '🇮🇷', title: 'فارسی' }
        ],
        showName: true
      }
    },
    theme: {
      name: 'Theme',
      description: 'ThemeMode',
      defaultValue: ThemeMode.BONDI_LIGHT,
      toolbar: {
        icon: 'circlehollow',
        items: Themes,
        showName: true,
        dynamicTitle: true
      }
    }
  }
}

export default preview
