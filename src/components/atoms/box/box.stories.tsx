import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { Box } from './index'

const Meta = {
  title: 'Atoms/Box',
  component: Box,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  args: {
    radius: 'md',
    px: 'l1',
    py: 'l3',
    w100: true,
    style: { height: '200px' }
  },
  decorators: [
    (Story) => (
      <div className='p-l5 bg-color-secondary-background'>
        <Story />
      </div>
    )
  ]
} satisfies StoryMeta<typeof Box>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default: Story = {
  render: (args) => <Box {...args}>Box</Box>
}
export const Dashed: Story = {
  render: (args) => (
    <Box {...args} borderStyle='dashed'>
      Box
    </Box>
  )
}
export const Shadow: Story = {
  render: (args) => (
    <Box {...args} shadow>
      Box
    </Box>
  )
}
export const BorderNoneShadow: Story = {
  render: (args) => (
    <Box {...args} borderNone shadow>
      Box
    </Box>
  )
}
export const HorizontalBorderGradient: Story = {
  render: (args) => (
    <Box {...args} className=''>
      Box
      <div
        className='w-100 border-gr-top mt-l3'
        style={{ height: '100px' }}
      ></div>
    </Box>
  )
}
export const VerticalBorderGradient: Story = {
  render: (args) => (
    <Box {...args} className=''>
      Box
      <div className='d-flex' style={{ height: '100px' }}>
        <div className='border-gr-start mx-auto'></div>
      </div>
    </Box>
  )
}
export const HorizontalBorder: Story = {
  render: (args) => (
    <Box {...args} className=''>
      Box
      <div className='w-100 border-top mt-l3' style={{ height: '100px' }}></div>
    </Box>
  )
}
