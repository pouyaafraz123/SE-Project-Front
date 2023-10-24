import type { StorybookConfig } from '@storybook/react-vite'
const { loadConfigFromFile, mergeConfig } = require('vite')
import path from 'path'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  core: {
    disableTelemetry: true
  },
  staticDirs: ['../public'],
  async viteFinal(config, { configType }) {
    const { config: userConfig } = await loadConfigFromFile(
      path.resolve(__dirname, '../vite.config.ts')
    )
    return mergeConfig(config, {
      ...userConfig,
      // manually specify plugins to avoid conflict
      plugins: []
    })
  }
}
export default config
