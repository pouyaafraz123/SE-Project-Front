import { Meta, StoryObj } from '@storybook/react'
import { WithPagination } from '@decorators'
import { appointmentDataListTable } from '@api/appointmentData/appointmentDataTable.mock.ts'
import { mockUtils } from '@utils'
import { WithTabs } from '../../../../.storybook/decorators/withTabs.tsx'
import { AppointmentDataList } from '@/templates/appointmentDataManagement'

const meta = {
  title: 'Templates/AppointmentData/AppointmentDataList',
  component: AppointmentDataList,
  parameters: {
    layout: 'padded'
  },
  decorators: [WithPagination, WithTabs],
  argTypes: { data: { control: false }, total: { control: false } },
  args: {
    data: appointmentDataListTable,
    isLoading: false,
    total: 10,
    tableParamProps: {
      pagination: {
        page: 1,
        onResultPerPageChange: () => {},
        onPageChange: () => {}
      },
      tabProps: {
        tabs: [
          { key: 'followup', title: 'پیگیری وظایف' },
          { key: 'referral', title: 'سفارشات' },
          { key: 'order', title: 'ارجاعات' },
          { key: 'prescription', title: 'نسخه ها' }
        ],
        selectedKey: 'followup',
        onChange: () => {}
      }
    }
  }
} satisfies Meta<typeof AppointmentDataList>

export default meta

type Story = StoryObj<typeof meta>

export const AppointmentDataListStory: Story = {
  render: (args) => (
    <AppointmentDataList
      {...args}
      data={mockUtils.getPage(
        appointmentDataListTable,
        args.tableParamProps.pagination?.page || 1,
        args.tableParamProps.pagination?.per_page || 10
      )}
      total={appointmentDataListTable.length}
    />
  )
}
