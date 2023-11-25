import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { WithPagination } from '@decorators'
import { StaffTable } from './index'
import { mockUtils } from '@/utils'
import { staffListMockData } from '@/api/userManagement/staff'

const Meta = {
  title: 'Templates/userManagement/staff/staffTable',
  component: StaffTable,
  parameters: {
    layout: 'padded'
  },
  decorators: [WithPagination],
  argTypes: { data: { control: false }, total: { control: false } },
  args: {
    data: staffListMockData,
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
} satisfies StoryMeta<typeof StaffTable>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default: Story = {
  render: (args) => (
    <>
      <StaffTable
        {...args}
        data={mockUtils.getPage(
          staffListMockData,
          args.tableParamProps.pagination?.page || 1,
          args.tableParamProps.pagination?.per_page || 10
        )}
        total={staffListMockData.length}
      />
    </>
  )
}
