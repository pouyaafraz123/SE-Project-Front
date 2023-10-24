import { useEffect } from 'react'
import { useUIStore } from '../../src/stores/index'
import { StoryFn, StoryContext } from '@storybook/react'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const withUIStore = (Story: StoryFn, context: StoryContext) => {
  const changeLocale = useUIStore((state) => state.changeLocale)
  const setTheme = useUIStore((state) => state.setTheme)
  const { locale, theme } = context.globals

  useEffect(() => {
    changeLocale(locale)
    setTheme(theme)
  }, [locale, theme])
  return <Story />
}
