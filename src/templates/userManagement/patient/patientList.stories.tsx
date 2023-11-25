import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { WithPagination } from '@decorators'
import { PatientTable } from './index'
import { mockUtils } from '@/utils'
import { patientListMockData } from '@/api/userManagement/patient'

const Meta = {
  title: 'Templates/userManagement/Patient/PatientTable',
  component: PatientTable,
  parameters: {
    layout: 'padded'
  },
  decorators: [WithPagination],
  argTypes: { data: { control: false }, total: { control: false } },
  args: {
    data: patientListMockData,
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
} satisfies StoryMeta<typeof PatientTable>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default: Story = {
  render: (args) => (
    <>
      <PatientTable
        {...args}
        data={mockUtils.getPage(
          patientListMockData,
          args.tableParamProps.pagination?.page || 1,
          args.tableParamProps.pagination?.per_page || 10
        )}
        total={patientListMockData.length}
      />
    </>
  )
}
