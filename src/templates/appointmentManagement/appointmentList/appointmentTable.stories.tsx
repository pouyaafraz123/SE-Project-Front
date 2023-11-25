import { Meta, StoryObj } from '@storybook/react'
import { WithPagination } from '@decorators'
import { appointmentListTable } from '@api/appointment'
import { mockUtils } from '@utils'
import { AppointmentTable } from '@/templates/appointmentManagement'

const meta = {
  title: 'Templates/Appointment/AppointmentTable',
  component: AppointmentTable,
  parameters: {
    layout: 'padded'
  },
  decorators: [WithPagination],
  argTypes: { data: { control: false }, total: { control: false } },
  args: {
    data: appointmentListTable,
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
} satisfies Meta<typeof AppointmentTable>

export default meta

type Story = StoryObj<typeof meta>

export const AppointmentTableStory: Story = {
  render: (args) => (
    <AppointmentTable
      {...args}
      data={mockUtils.getPage(
        appointmentListTable,
        args.tableParamProps.pagination?.page || 1,
        args.tableParamProps.pagination?.per_page || 10
      )}
      total={appointmentListTable.length}
    />
  )
}
