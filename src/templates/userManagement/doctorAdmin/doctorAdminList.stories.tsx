import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { WithPagination } from '@decorators'
import { DoctorAdminTable } from './index'
import { mockUtils } from '@/utils'
import { doctorAdminListMockData } from '@/api/userManagement/doctorAdmin'

const Meta = {
  title: 'Templates/userManagement/DoctorAdmin/DoctorAdminTable',
  component: DoctorAdminTable,
  parameters: {
    layout: 'padded'
  },
  decorators: [WithPagination],
  argTypes: { data: { control: false }, total: { control: false } },
  args: {
    data: doctorAdminListMockData,
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
} satisfies StoryMeta<typeof DoctorAdminTable>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default: Story = {
  render: (args) => (
    <>
      <DoctorAdminTable
        {...args}
        data={mockUtils.getPage(
          doctorAdminListMockData,
          args.tableParamProps.pagination?.page || 1,
          args.tableParamProps.pagination?.per_page || 10
        )}
        total={doctorAdminListMockData.length}
      />
    </>
  )
}
