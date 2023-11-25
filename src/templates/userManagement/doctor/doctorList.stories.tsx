import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { WithPagination } from '@decorators'
import { DoctorTable } from './index'
import { mockUtils } from '@/utils'
import { doctorListMockData } from '@/api/userManagement/doctor/data.mock'

const Meta = {
  title: 'Templates/userManagement/Doctor/DoctorTable',
  component: DoctorTable,
  parameters: {
    layout: 'padded'
  },
  decorators: [WithPagination],
  argTypes: { data: { control: false }, total: { control: false } },
  args: {
    data: doctorListMockData,
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
} satisfies StoryMeta<typeof DoctorTable>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default: Story = {
  render: (args) => (
    <>
      <DoctorTable
        {...args}
        data={mockUtils.getPage(
          doctorListMockData,
          args.tableParamProps.pagination?.page || 1,
          args.tableParamProps.pagination?.per_page || 10
        )}
        total={doctorListMockData.length}
      />
    </>
  )
}
