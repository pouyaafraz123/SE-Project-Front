import { Meta, StoryObj } from '@storybook/react'
import { hfListTable } from '@api/hf/hfTable.mock'
import { mockUtils } from '@utils'
import { WithPagination } from '@decorators'
import { HFList } from './hfList'

const meta = {
  title: 'Templates/HF/HFList',
  component: HFList,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [WithPagination],
  argTypes: { data: { control: false }, totalPages: { control: false } },
  args: {
    data: hfListTable,
    page: 1,
    pageSize: 20,
    totalPages: 1,
    isLoading: false
  }
} satisfies Meta<typeof HFList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <HFList
      {...args}
      data={mockUtils.getPage(hfListTable, args.page, args.pageSize)}
      totalPages={hfListTable.length / args.pageSize}
    />
  )
}
