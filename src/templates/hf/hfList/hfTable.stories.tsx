import { Meta, StoryObj } from '@storybook/react'
import { hfListTable } from '@api/hf/hfTable.mock'
import { mockUtils } from '@utils'
import { WithPagination } from '@decorators'
import { HFTable } from '.'

const meta = {
  title: 'Templates/HF/HFTable',
  component: HFTable,
  parameters: {
    layout: 'padded'
  },
  decorators: [WithPagination],
  argTypes: { data: { control: false }, total: { control: false } },
  args: {
    data: hfListTable,
    isLoading: false,
    total: 10,
    tableParamProps: {
      pagination: {
        page: 1,
        onResultPerPageChange: () => {},
        onPageChange: () => {}
      }
    }
  }
} satisfies Meta<typeof HFTable>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <HFTable
      {...args}
      data={mockUtils.getPage(
        hfListTable,
        args.tableParamProps.pagination?.page || 1,
        args.tableParamProps.pagination?.per_page || 10
      )}
      total={hfListTable.length}
    />
  )
}
