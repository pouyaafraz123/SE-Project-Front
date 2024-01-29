import { Meta, StoryObj } from '@storybook/react'
import { PageTabs } from '@components/atoms/pageTabs/pageTabs.tsx'
import { usePageTabParam } from '@components/atoms/pageTabs/helper.ts'

const meta = {
  title: 'Atoms/PageTabs',
  component: PageTabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded'
  },
  args: {
    tabs: [],
    onChange: () => {},
    selectedKey: ''
  }
} satisfies Meta<typeof PageTabs>

export default meta

type Story = StoryObj<typeof meta>

function TabComponent(props: any) {
  const tabProps = usePageTabParam([
    { key: '1', title: 'تاریخچه بیماری‌ها' },
    { key: '2', title: 'داروها/آلرژی ها' },
    { key: '3', title: 'تاریخچه خانوادگی' },
    { key: '4', title: 'تاریخچه اجتماعی' }
  ])

  return <PageTabs {...props} {...tabProps} />
}

export const PageTabsStory: Story = {
  render: (args) => <TabComponent {...args} />
}
