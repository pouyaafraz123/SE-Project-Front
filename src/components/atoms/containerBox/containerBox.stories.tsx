import { Meta, StoryObj } from '@storybook/react'
import { ContainerBox } from '.'

const meta = {
  title: 'Atoms/ContainerBox',
  component: ContainerBox,
  tags: ['autodocs']
} satisfies Meta<typeof ContainerBox>

export default meta

type Story = StoryObj<typeof meta>

export const ContainerBoxStory: Story = {
  args: {
    name: 'عنوان نمونه اول',
    link: '/',
    children: <></>
  }
}
